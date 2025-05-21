import useGame from "../hooks/useGame"

const Lose = () => {
  const { setDisplayType } = useGame()

  return (
    <div id="lose">
      <h4>MISSION FAILED</h4>
      Oh no! You blew your <span className="keyword">Cover</span>!
      <br />
      <button onClick={() => setDisplayType("briefing")}>PLAY AGAIN</button>
    </div>
  )
}

export default Lose
