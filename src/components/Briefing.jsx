import useGame from "../hooks/useGame"
import BriefingDialogue from "./BriefingDialogue"
import { useState } from "react"
import images from "../data/images"

const NextDialogue = ({ dialogueStep, setDialogueStep }) => {
  return <button onClick={() => setDialogueStep(dialogueStep + 1)}>NEXT</button>
}

const MapButton = () => {
  const { goToMap } = useGame()

  return <button onClick={goToMap}>MAP</button>
}

const LocationButton = () => {
  const { goToLocation } = useGame()

  return <button onClick={() => goToLocation(0)}>BEGIN</button>
}

const OfficeButton = () => {
  const { setDisplayType } = useGame()

  return <button onClick={() => setDisplayType("office")}>GO HELP CHIEF</button>
}

const Briefing = () => {
  const { currentLevel } = useGame()
  const [dialogueStep, setDialogueStep] = useState(0)

  const backgroundUrl = images[`bgBriefing${currentLevel}`]

  return (
    <div
      id="briefing"
      style={{
        backgroundImage: `url('${backgroundUrl.src}')`,
        backgroundSize: "cover",
      }}
    >
      <div id="briefing-text-box">
        <span id="briefing-level">TRANSMISSION LEVEL: {currentLevel + 1}</span>
        <hr />
        <BriefingDialogue
          dialogueStep={dialogueStep}
          setDialogueStep={setDialogueStep}
        />
        <br />
        {dialogueStep !== -1 ? (
          <NextDialogue
            dialogueStep={dialogueStep}
            setDialogueStep={setDialogueStep}
          />
        ) : currentLevel === 0 ? (
          <LocationButton />
        ) : currentLevel === 1 ? (
          <MapButton />
        ) : (
          <OfficeButton />
        )}
      </div>
    </div>
  )
}

export default Briefing
