import { GameContext } from "../hooks/useGame"
import { useState } from "react"
import scenes from "../data/scenes"

const GameProvider = ({ children }) => {
  const [currentLevel, setCurrentLevel] = useState(1)
  const [displayType, setDisplayType] = useState("title")
  const [currentScene, setCurrentScene] = useState(scenes.bgCoffee)
  const [currentText, setCurrentText] = useState(currentScene.defaultText)
  const [cover, setCover] = useState(3)

  return (
    <GameContext.Provider
      value={{
        currentLevel,
        setCurrentLevel,
        displayType,
        setDisplayType,
        currentText,
        setCurrentText,
        currentScene,
        setCurrentScene,
        cover,
        setCover,
      }}
    >
      {children}
    </GameContext.Provider>
  )
}

export default GameProvider
