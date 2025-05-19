import useGame from "../hooks/useGame"

const Lose = () => {
  const { setDisplayType } = useGame()

  return (
    <div id="lose">
      Hey, you lost
      <br />
      <span onClick={() => setDisplayType("briefing")}>[PLAY AGAIN]</span>
    </div>
  )
}

export default Lose
