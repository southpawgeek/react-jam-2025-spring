import useGame from "../hooks/useGame"

const Debug = () => {
  const { setDisplayType, goToLevel, setCover } = useGame()

  return (
    <div
      style={{
        backgroundColor: "#a00",
        textAlign: "center",
        width: "800px",
        padding: "1rem 0",
        margin: "auto",
      }}
    >
      <span onClick={() => setDisplayType("title")}>[TITLE]</span>
      <span onClick={() => setDisplayType("briefing")}>[BRIEFING]</span>
      <span onClick={() => setDisplayType("map")}>[MAP]</span>
      <br />
      <span onClick={() => setDisplayType("win")}>[WIN]</span>
      <span onClick={() => setDisplayType("lose")}>[LOSE]</span>
      <br />
      <span onClick={() => goToLevel(0)}>[LEVEL 1]</span>
      <span onClick={() => goToLevel(1)}>[LEVEL 2]</span>
      <span onClick={() => goToLevel(2)}>[LEVEL 3]</span>
      <br />
      <span onClick={() => setCover(0)}>[COVER 0]</span>
      <span onClick={() => setCover(1)}>[COVER 1]</span>
      <span onClick={() => setCover(2)}>[COVER 2]</span>
      <span onClick={() => setCover(3)}>[COVER 3]</span>
    </div>
  )
}

export default Debug
