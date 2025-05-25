import { useEffect } from "react"
import { officeDialogue } from "../data/dialogue"

const OfficeDialogue = ({ dialogueStep, setDialogueStep }) => {
  useEffect(() => {
    if (officeDialogue[dialogueStep] === undefined) {
      setDialogueStep(-1)
    }
  })
  return officeDialogue[dialogueStep] || null
}

export default OfficeDialogue
