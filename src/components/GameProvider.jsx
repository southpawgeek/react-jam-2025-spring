import { GameContext } from "../hooks/useGame"
import { useState } from "react"
import scenes, { levels } from "../data/scenes"
import dialogue from "../data/dialogue"
import npcs from "../data/npcs"
import useSound from "use-sound"
import soundBoop from "../assets/sound-boop.wav"
import soundDead from "../assets/sound-dead.wav"
import soundExit from "../assets/sound-exit.wav"
import soundMove from "../assets/sound-move.wav"
import soundKill from "../assets/sound-explosion.wav"

const GameProvider = ({ children }) => {
  // sounds
  const [boop] = useSound(soundBoop)
  const [cancelBoop] = useSound(soundBoop, { playbackRate: 0.5 })
  const [done] = useSound(soundExit)
  const [move] = useSound(soundMove)
  const [dead] = useSound(soundDead)
  const [kill] = useSound(soundKill, { volume: 0.05 })

  const [currentLevel, setCurrentLevel] = useState(0)
  const [availableScenes, setAvailableScenes] = useState(levels[0])
  const [displayType, setDisplayType] = useState("title")
  const [currentScene, setCurrentScene] = useState(scenes.bgCoffee)
  const [currentText, setCurrentText] = useState(currentScene.defaultText)
  const [cover, setCover] = useState(3)
  const [coverBlowShow, setCoverBlowShow] = useState(false)
  const [inDialogue, setInDialogue] = useState(false)
  const [currentDialogueSet, setCurrentDialogueSet] = useState(null)
  const [currentNpcName, setCurrentNpcName] = useState(null)
  const [hasRevealed, setHasRevealed] = useState(false)
  const [gameOverText, setGameOverText] = useState(null)

  const goToLocation = (index) => {
    setCurrentScene(availableScenes[index])
    setCurrentText(availableScenes[index].defaultText)
    setCurrentNpcName(null)
    setInDialogue(false)
    setDisplayType("location")
    setHasRevealed(false)
    move()
  }

  const goToMap = () => {
    setCurrentLevel(currentLevel)
    setCover(3)
    setAvailableScenes(levels[currentLevel])
    setDisplayType("map")
  }

  const initiateDialogue = (npcName) => {
    const dialogueSet = dialogue[`${npcName}${currentLevel}`]
    setCurrentDialogueSet(dialogueSet)
    setCurrentText(dialogueSet.initial)
    setCurrentNpcName(npcs[npcName].name)
    setInDialogue(true)
    boop()
  }

  const endDialogue = ({ text = currentScene.defaultText }) => {
    setCurrentNpcName(null)
    setInDialogue(false)
    setCurrentText(text)
    setHasRevealed(false)
    cancelBoop()
  }

  const revealToNpc = () => {
    const dialogueSuccess = currentDialogueSet.success
    const triggerGameOver = currentDialogueSet?.gameOver
    const blowCover = currentDialogueSet.blowCover

    setHasRevealed(true)
    setCurrentText(currentDialogueSet.reveal)
    if (blowCover) {
      setCover(cover - 1)
      setCoverBlowShow(true)
      dead()
    } else if (triggerGameOver) {
      gameOver(true)
      dead()
    } else if (dialogueSuccess) {
      setDisplayType("debriefing")
      done()
    }
  }

  const attackNpc = () => {
    const dialogueSuccess = currentDialogueSet.success
    const triggerGameOver = currentDialogueSet?.gameOver

    if (dialogueSuccess) {
      setDisplayType("win")
    }
    if (triggerGameOver) {
      setCurrentText(currentDialogueSet.reveal)
      setGameOverText(currentDialogueSet.finalText)
      gameOver(true)
    }
    kill()
  }

  const advanceLevel = () => {
    setCurrentLevel(currentLevel + 1)
    setAvailableScenes(levels[currentLevel + 1])
    setDisplayType("briefing")
  }

  const goToScene = (scene) => {
    setCurrentScene(scene)
    setCurrentText(scene.defaultText)
  }

  const gameOver = (force) => {
    console.log(gameOverText)
    if (cover < 1 || force) {
      setDisplayType("lose")
    }
  }

  const restartLevel = () => {
    setCover(3)
    setCoverBlowShow(false)
    setInDialogue(false)
    setHasRevealed(false)
    if (currentLevel === 0) {
      setDisplayType("location")
    } else {
      setDisplayType("map")
    }
  }

  const restartGame = () => {
    setCurrentLevel(0)
    setAvailableScenes(levels[0])
    setDisplayType("briefing")
    setCurrentScene(scenes.bgCoffee)
    setCurrentText(scenes.bgCoffee.defaultText)
    setCover(3)
    setCoverBlowShow(false)
    setInDialogue(false)
    setCurrentDialogueSet(null)
    setCurrentNpcName(null)
    setHasRevealed(false)
    setGameOverText(null)
  }

  const debugSetLevel = (level) => {
    setCurrentLevel(level)
    setAvailableScenes(levels[level])
  }

  return (
    <GameContext.Provider
      value={{
        currentLevel,
        setCurrentLevel,
        levels,
        goToLocation,
        goToMap,
        advanceLevel,
        availableScenes,
        displayType,
        setDisplayType,
        currentText,
        setCurrentText,
        currentScene,
        setCurrentScene,
        cover,
        setCover,
        coverBlowShow,
        setCoverBlowShow,
        hasRevealed,
        goToScene,
        inDialogue,
        setInDialogue,
        initiateDialogue,
        endDialogue,
        revealToNpc,
        attackNpc,
        currentNpcName,
        gameOver,
        gameOverText,
        restartGame,
        restartLevel,
        debugSetLevel,
        boop,
        cancelBoop,
        done,
        move,
        dead,
      }}
    >
      {children}
    </GameContext.Provider>
  )
}

export default GameProvider
