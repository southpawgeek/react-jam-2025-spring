import useGame from "../hooks/useGame"
import OfficeDialogue from "./OfficeDialogue"
import { useState } from "react"
import images from "../data/images"

const NextDialogue = ({ dialogueStep, setDialogueStep }) => {
  return <button onClick={() => setDialogueStep(dialogueStep + 1)}>NEXT</button>
}

const Office = () => {
  const { goToMap } = useGame()
  const [dialogueStep, setDialogueStep] = useState(0)

  const backgroundUrl = images.bgOffice

  return (
    <div
      id="debriefing"
      style={{
        backgroundImage: `url('${backgroundUrl.src}')`,
        backgroundSize: "85%",
        backgroundPosition: "100% -35%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <img
        src={dialogueStep === 0 ? images.playerAgent.src : images.playerAgentNote.src}
        style={{ width: "300px", position: "absolute", bottom: "10px" }}
      />
      <img src={dialogueStep === 0 ? images.chiefDeadNote.src : images.chiefDead.src} style={{width: "250px", position: "absolute", right: "100px", top: "200px"}} />
      <div id="text-box">
        <OfficeDialogue
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
            <button onClick={goToMap}>MAP</button>
          </>
        )}
      </div>
    </div>
  )
}

export default Office
