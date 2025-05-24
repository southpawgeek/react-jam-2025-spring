import useGame from "../hooks/useGame"
import images from "../data/images"

const Lose = () => {
  const { restartGame, currentScene, currentText, currentNpcName } = useGame()

  const backgroundUrl = images[currentScene.background].src

  return (
    <div
      id="lose"
      style={{
        backgroundImage: `url('${backgroundUrl}')`,
        backgroundPosition: "0 50%",
      }}
    >
      <img
        src={images.missionFailed.src}
        alt="MISSION FAILED"
        style={{ position: "absolute", right: "0", top: "0" }}
      />
      <img
        src={images.playerAgent.src}
        style={{ width: "300px", position: "absolute", bottom: "10px" }}
      />
      {currentNpcName && (
        <div
          style={{
            position: "absolute",
            right: "2%",
            bottom: "20%",
            width: "500px",
            backgroundColor: "rgba(0,0,0,0.5)",
            padding: "10px",
            borderRadius: "10px",
          }}
        >
          <strong>{currentNpcName}</strong>: {currentText}
        </div>
      )}

      <button onClick={() => restartGame()}>PLAY AGAIN</button>
    </div>
  )
}

export default Lose
