import { useEffect } from "react"
import useGame from "../hooks/useGame"
import Keyword from "./Keyword"

const BriefingDialogue = ({ dialogueStep, setDialogueStep }) => {
  const { currentLevel } = useGame()

  const dialogue = [
    [
      <>
        <strong>
          <Keyword keyword="chief" />:{" "}
        </strong>
        Good afternoon, night, or morning <Keyword keyword="agent" />! I have a
        challenging mission for you today. Our intel systems have been hit with
        data corruption that prevents me from having the full dossier on your{" "}
        <Keyword keyword="contact" /> for this mission.
      </>,
      <>
        <strong>
          <Keyword keyword="chief" />:{" "}
        </strong>
        I know that they will be wearing very decorative attire, and their{" "}
        <Keyword keyword="story" /> is that <em>they're a model</em>.
      </>,
      <>
        <strong>
          <Keyword keyword="agent" />:{" "}
        </strong>
        Good gravy, that's not much to go on, <Keyword keyword="chief" />
        ...
      </>,
      <>
        <strong>
          <Keyword keyword="chief" />:{" "}
        </strong>
        I know, if it was anyone else, I wouldn't expect success. But, we have
        full trust in you.
      </>,
      <>
        <strong>
          <Keyword keyword="chief" />:{" "}
        </strong>
        Your first <Keyword keyword="location" /> will be a{" "}
        <em>coffee shop in Tokyo</em>. We have no reason to believe that{" "}
        <Keyword keyword="counterAgents" /> will be there to try to stop you.
      </>,
      <>
        <strong>
          <Keyword keyword={"chief"} />:{" "}
        </strong>
        Still... make sure to only <Keyword keyword="reveal" /> your identity to
        whoever you believe to be your <Keyword keyword="contact" />. Your{" "}
        <Keyword keyword="cover" /> is important to us, and our work.
      </>,
    ],
    [<>briefing #2</>],
    [<>briefing #3</>],
  ]

  useEffect(() => {
    if (dialogue[currentLevel][dialogueStep] === undefined) {
      setDialogueStep(-1)
    }
  })

  return (
    dialogue[currentLevel][dialogueStep] || (
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
