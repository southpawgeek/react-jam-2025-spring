import { GameContext } from "../hooks/useGame"
import { useState } from "react"
import { DEFAULT_TEXT } from "../data/constants"
import scenes from "../data/scenes"

const GameProvider = ({ children }) => {
  const [currentText, setCurrentText] = useState(DEFAULT_TEXT)
  const [currentScene, setCurrentScene] = useState(scenes.scene1)

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
