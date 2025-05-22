import { useEffect } from "react"
import useGame from "../hooks/useGame"
import Keyword from "./Keyword"
import { briefingDialogue } from "../data/dialogue"

const BriefingDialogue = ({ dialogueStep, setDialogueStep }) => {
  const { currentLevel } = useGame()

  useEffect(() => {
    if (briefingDialogue[currentLevel][dialogueStep] === undefined) {
      setDialogueStep(-1)
    }
  })

  return (
    briefingDialogue[currentLevel][dialogueStep] || (
      <>
        <strong>
          <Keyword keyword="chief" />:{" "}
        </strong>
        We're counting on you.
      </>
    )
  )
}

export default BriefingDialogue
