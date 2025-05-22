import useGame from "../hooks/useGame"
import BriefingDialogue from "./BriefingDialogue"
import { useState } from "react"

const NextDialogue = ({ dialogueStep, setDialogueStep }) => {
  return <button onClick={() => setDialogueStep(dialogueStep + 1)}>NEXT</button>
}

const StartMap = ({ startMap }) => <button onClick={startMap}>START</button>

const Briefing = () => {
  const { currentLevel, goToLevel, setDisplayType } = useGame()
  const [dialogueStep, setDialogueStep] = useState(0)

  const startMap = () => {
    goToLevel(currentLevel)
    setDisplayType("map")
  }

  return (
    <div id="briefing">
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
        ) : (
          <StartMap startMap={startMap} />
        )}
      </div>
    </div>
  )
}

export default Briefing
