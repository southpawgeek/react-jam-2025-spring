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
  const [currentNpcName, setCurrentNpcName] = useState(null)

  const goToLevel = (level) => {
    setCurrentLevel(level)
    setAvailableScenes(levels[level])
    const firstScene = levels[level][0]
    setCurrentScene(firstScene)
    setCurrentText(firstScene.defaultText)
    setCover(3)
  }

  const initiateDialogue = (npcName) => {
    setCurrentNpcName(npcs[npcName].name)
    setInDialogue(true)
    const dialogueSet = dialogue[`${npcName}${currentLevel}`]
    setCurrentText(dialogueSet.initial)
  }

  const endDialogue = () => {
    setCurrentNpcName(null)
    setInDialogue(false)
    setCurrentText(currentScene.defaultText)
  }

  const goToScene = (scene) => {
    setCurrentScene(scene)
    setCurrentText(scene.defaultText)
  }

  const gameOver = () => {
    if (cover < 1) {
      setDisplayType("lose")
      setCurrentLevel(0)
    }
  }

  return (
    <GameContext.Provider
      value={{
        currentLevel,
        setCurrentLevel,
        levels,
        goToLevel,
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
        currentNpcName,
        gameOver,
      }}
    >
      {children}
    </GameContext.Provider>
  )
}

export default GameProvider
