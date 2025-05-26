import useGame from "../hooks/useGame"
import images from "../data/images"

const Lose = () => {
  const {
    restartLevel,
    currentScene,
    currentText,
    currentNpcName,
    currentLevel,
    gameOverText,
  } = useGame()

  const backgroundUrl = images[currentScene.background].src
  const npcUrl = images[currentNpcName.toLowerCase()].src

  return (
    <div
      id="lose"
      style={{
        backgroundImage: `url('${backgroundUrl}')`,
        backgroundPosition: "35% 90%",
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
      {currentLevel !== 2 && (
        <img
          src={npcUrl}
          style={{
            position: "absolute",
            bottom: "0",
            right: "0",
            width: "250px",
          }}
        />
      )}
      {currentLevel === 2 && (
        <img
          src={npcUrl}
          style={{
            position: "absolute",
            bottom: "-100%",
            scale: "0.2",
            transform: "rotate(90deg)",
          }}
        />
      )}
      {currentNpcName && (
        <div
          style={{
            position: "absolute",
            right: "25px",
            bottom: "50px",
            width: "500px",
            backgroundColor: "rgba(0,0,0,0.5)",
            padding: "10px",
            borderRadius: "10px",
          }}
        >
          {currentLevel === 2 && (
            <>
              *You pull the trigger, confident that your target is the
              terrorist.*
              <br />
              <br />
            </>
          )}
          <strong>{currentNpcName}</strong>: {currentText}
          {currentLevel === 2 && (
            <>
              <br />
              <br />
              <strong>{gameOverText}</strong>
            </>
          )}
        </div>
      )}

      <button onClick={() => restartLevel()}>RESTART LEVEL</button>
    </div>
  )
}

export default Lose
