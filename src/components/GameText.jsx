import useGame from "../hooks/useGame"

const GameText = () => {
  const { currentText } = useGame()
  return <p>{currentText}</p>
}

export default GameText
