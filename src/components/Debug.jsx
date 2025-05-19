import useGame from "../hooks/useGame"

const Debug = () => {
  const { setDisplayType } = useGame()

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
      <span onClick={() => setDisplayType("win")}>[WIN]</span>
      <span onClick={() => setDisplayType("lose")}>[LOSE]</span>
    </div>
  )
}

export default Debug
