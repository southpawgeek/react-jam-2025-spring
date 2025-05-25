import useGame from "../hooks/useGame"
import { hints } from "../data/keywords"
import Keyword from "./Keyword"

const Hints = () => {
  const { currentLevel, inDialogue } = useGame()
  const currentHints = hints[currentLevel]

  return (
    !inDialogue && (
      <div id="hints">
        <Keyword keyword="contact" /> details:
        <ul>
          {currentHints.map((hint) => (
            <li>{hint}</li>
          ))}
        </ul>
      </div>
    )
  )
}

export default Hints
