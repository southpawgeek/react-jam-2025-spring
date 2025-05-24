import { GameContext } from "../hooks/useGame"
import { useState } from "react"
import scenes, { levels } from "../data/scenes"
import dialogue from "../data/dialogue"
import npcs from "../data/npcs"

const GameProvider = ({ children }) => {
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

  const goToLocation = (index) => {
    setCurrentScene(availableScenes[index])
    setCurrentText(availableScenes[index].defaultText)
    setCover(3)
    setDisplayType("location")
  }

  const goToMap = () => {
    setCurrentLevel(currentLevel)
    setAvailableScenes(levels[currentLevel])
    setDisplayType("map")
  }

  const initiateDialogue = (npcName) => {
    setCurrentNpcName(npcs[npcName].name)
    setInDialogue(true)
    const dialogueSet = dialogue[`${npcName}${currentLevel}`]
    setCurrentDialogueSet(dialogueSet)
    setCurrentText(dialogueSet.initial)
  }

  const endDialogue = ({ text = currentScene.defaultText }) => {
    setCurrentNpcName(null)
    setInDialogue(false)
    setCurrentText(text)
  }

  const revealToNpc = () => {
    const dialogueSuccess = currentDialogueSet.success
    const blowCover = currentDialogueSet.blowCover
    if (blowCover) {
      setCover(cover - 1)
      setCoverBlowShow(true)
    }
    if (dialogueSuccess) {
      setDisplayType("debriefing")
    } else {
      endDialogue({ text: currentDialogueSet.reveal })
    }
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

  const gameOver = () => {
    if (cover < 1) {
      setDisplayType("lose")
      setCurrentLevel(0)
      setCoverBlowShow(false)
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
        goToScene,
        inDialogue,
        setInDialogue,
        initiateDialogue,
        endDialogue,
        revealToNpc,
        currentNpcName,
        gameOver,
        restartGame,
      }}
    >
      {children}
    </GameContext.Provider>
  )
}

export default GameProvider
