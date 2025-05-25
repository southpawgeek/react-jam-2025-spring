import useGame from "../hooks/useGame"
import images from "../data/images"

const Win = () => {
  const { restartGame } = useGame()

  const backgroundUrl = images.bgCastle.src
  const badGuy = images.edgar.src

  return (
    <div id="win" style={{ backgroundImage: `url('${backgroundUrl}')`, backgroundPosition: "80% 85%" }}>
            <img
        src={images.missionComplete.src}
        alt="MISSION COMPLETE"
        style={{ position: "absolute", top: "0", right: "0" }}
      />
      <img
        src={images.playerAgent.src}
        style={{ width: "300px", position: "absolute", bottom: "10px" }}
      />
      <img src={badGuy} style={{ position: "absolute", bottom: "-100%", scale: "0.2", transform: "rotate(90deg)" }} />
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
        *You pull the trigger, confident that your target is the terrorist.*
          <br /><br/>
        <strong>Edgar</strong>: Ya gyot me in quite the steamy mood bruv! Toss it all!
        <br /><br />
        <strong>You killed the terrorist, and saved the public from a deadly end!</strong>
        <br /><br />
        Thank you for saving the world, and game jams! Have a pleasant day, Agent!
        </div>
      <button onClick={restartGame}>PLAY AGAIN</button>
    </div>
  )
}

export default Win
