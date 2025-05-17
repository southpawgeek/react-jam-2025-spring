import { GameContext } from "../hooks/useGame"
import { useState } from "react"
import { DEFAULT_TEXT } from "../data/constants"

const GameProvider = ({ children }) => {
  const [currentText, setCurrentText] = useState(DEFAULT_TEXT)

  return (
    <GameContext.Provider
      value={{
        currentText,
        setCurrentText,
      }}
    >
      {children}
    </GameContext.Provider>
  )
}

export default GameProvider
