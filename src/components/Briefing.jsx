import useGame from "../hooks/useGame"
import Keyword from "./Keyword"

const Briefing = () => {
  const { setDisplayType, currentLevel, goToLevel } = useGame()

  const startMap = () => {
    goToLevel(currentLevel)
    setDisplayType("map")
  }
  return (
    <div id="briefing">
      <div id="briefing-text-box">
        <span id="briefing-level">TRANSMISSION LEVEL: {currentLevel + 1}</span>
        <hr />
        Go to different <Keyword keyword="locations" /> and get in touch with
        our <Keyword keyword="contact" />. Be careful. If you say the wrong
        thing to the wrong person, you may blow your <Keyword keyword="cover" />
        !
        <br />
        <button onClick={startMap}>START</button>
      </div>
    </div>
  )
}

export default Briefing
