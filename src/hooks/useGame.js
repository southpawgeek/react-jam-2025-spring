import { createContext, useContext } from "react"

export const GameContext = createContext()

const useGame = () => {
  const context = useContext(GameContext)
  if (!context) {
    throw new Error("useGame must be used within a GameProvider")
  }
  return context
}

export default useGame
