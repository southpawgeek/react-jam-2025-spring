import useGame from "../hooks/useGame"

const Lose = () => {
  const { restartGame } = useGame()

  return (
    <div id="lose">
      <h4>MISSION FAILED</h4>
      Oh no! You blew your <span className="keyword">Cover</span>!
      <br />
      <button onClick={() => restartGame()}>PLAY AGAIN</button>
    </div>
  )
}

export default Lose
