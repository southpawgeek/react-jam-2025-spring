import useGame from "../hooks/useGame"

const Briefing = () => {
  const { setDisplayType } = useGame()

  return (
    <div id="briefing">
      This would have the briefing text and some other stuff.
      <br />
      <span onClick={() => setDisplayType("map")}>[START]</span>
    </div>
  )
}

export default Briefing
