import { GameContext } from "../hooks/useGame"
import { useState } from "react"
import scenes from "../data/scenes"

const GameProvider = ({ children }) => {
  const [currentScene, setCurrentScene] = useState(scenes.scene1)
  const [currentText, setCurrentText] = useState(currentScene.defaultText)

  return (
    <GameContext.Provider
      value={{
        currentText,
        setCurrentText,
        currentScene,
        setCurrentScene,
      }}
    >
      {children}
    </GameContext.Provider>
  )
}

export default GameProvider
