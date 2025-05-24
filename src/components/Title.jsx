import useGame from "../hooks/useGame"
import images from "../data/images"

const Title = () => {
  const { setDisplayType } = useGame()

  return (
    <div
      id="title-display"
      style={{
        backgroundImage: `url('${images.title.src}')`,
        backgroundSize: "75%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <button onClick={() => setDisplayType("briefing")}>BEGIN MISSION</button>
    </div>
  )
}

export default Title
