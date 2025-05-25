import useGame from "../hooks/useGame"

const Win = () => {
  const { restartGame } = useGame()

  return (
    <div id="win">
      Hey, you won
      <br />
      <button onClick={restartGame}>PLAY AGAIN</button>
    </div>
  )
}

export default Win
