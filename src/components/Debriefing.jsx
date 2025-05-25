import useGame from "../hooks/useGame"
import DebriefingDialogue from "./DebriefingDialogue"
import { useState } from "react"
import images from "../data/images"

const NextDialogue = ({ dialogueStep, setDialogueStep }) => {
  return <button onClick={() => setDialogueStep(dialogueStep + 1)}>NEXT</button>
}

const Debriefing = () => {
  const { advanceLevel, currentScene, currentLevel } = useGame()
  const [dialogueStep, setDialogueStep] = useState(0)

  const backgroundUrl = images[currentScene.background]

  return (
    <div
      id="debriefing"
      style={{
        backgroundImage: `url('${backgroundUrl.src}')`,
        backgroundPosition: backgroundUrl.debriefingPosition,
      }}
    >
      {currentLevel === 0 && (
        <>
          <img
            src={images.playerAgent.src}
            style={{ width: "300px", position: "absolute", bottom: "10px" }}
          />
          <img
            src={images.eliza.src}
            style={{
              width: "300px",
              position: "absolute",
              top: "100px",
              left: "200px",
            }}
          />
        </>
      )}
      {currentLevel === 1 && (
        <>
          <img
            src={images.playerAgent.src}
            style={{
              width: "300px",
              position: "absolute",
              bottom: "0",
              left: "25%",
              transform: "scaleX(-1)",
            }}
          />
          <img
            src={images.winry.src}
            style={{
              width: "300px",
              position: "absolute",
              top: "15%",
              left: "5%",
            }}
          />
        </>
      )}
      <img
        src={images.missionComplete.src}
        alt="MISSION COMPLETE"
        style={{ position: "absolute", top: "0", right: "0" }}
      />
      <div id="text-box">
        <DebriefingDialogue
          dialogueStep={dialogueStep}
          setDialogueStep={setDialogueStep}
        />
        {dialogueStep !== -1 ? (
          <NextDialogue
            dialogueStep={dialogueStep}
            setDialogueStep={setDialogueStep}
          />
        ) : (
          <>
            Let's go!
            <button onClick={advanceLevel}>CONTINUE</button>
          </>
        )}
      </div>
    </div>
  )
}

export default Debriefing
