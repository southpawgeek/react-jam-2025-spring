import useGame from "../hooks/useGame"

const Title = () => {
  const { setDisplayType } = useGame()

  return (
    <div id="title-display">
      Spy Thing
      <br />
      <span onClick={() => setDisplayType("briefing")}>[START]</span>
    </div>
  )
}

export default Title
