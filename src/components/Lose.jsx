import useGame from "../hooks/useGame"
import images from "../data/images"
import Keyword from "./Keyword"

const Lose = () => {
  const { restartGame, currentScene } = useGame()

  const backgroundUrl = images[currentScene.background].src

  return (
    <div
      id="lose"
      style={{ backgroundImage: `url('${backgroundUrl}')` }}
    >
      <h4 style={{ position: "absolute", right: "0", top: "35%" }}>
        MISSION FAILED
      </h4>
      <span style={{ position: "absolute" }}>
        You blew your <Keyword keyword="cover" />!
      </span>
      <img
        src={images.playerAgent.src}
        style={{ width: "300px", position: "absolute", bottom: "10px" }}
      />

      <button onClick={() => restartGame()}>PLAY AGAIN</button>
    </div>
  )
}

export default Lose
