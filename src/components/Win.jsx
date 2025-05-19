import useGame from "../hooks/useGame"

const Win = () => {
  const { setDisplayType } = useGame()

  return (
    <div id="win">
      Hey, you won
      <br />
      <span onClick={() => setDisplayType("briefing")}>[PLAY AGAIN]</span>
    </div>
  )
}

export default Win
