import { useEffect } from "react"
import useGame from "../hooks/useGame"
import { debriefingDialogue } from "../data/dialogue"

const DebriefingDialogue = ({ dialogueStep, setDialogueStep }) => {
  const { currentLevel } = useGame()

  useEffect(() => {
    if (debriefingDialogue[currentLevel][dialogueStep] === undefined) {
      setDialogueStep(-1)
    }
  })

  return debriefingDialogue[currentLevel][dialogueStep] || null
}

export default DebriefingDialogue
