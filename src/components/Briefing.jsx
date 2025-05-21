import useGame from "../hooks/useGame"

const Briefing = () => {
  const { setDisplayType, currentLevel, goToLevel } = useGame()

  const startMap = () => {
    goToLevel(currentLevel)
    setDisplayType("map")
  }
  return (
    <div id="briefing">
      <div className="briefing-profile">person 1 goes here</div>
      <div id="mid-brief">Briefing Level: {currentLevel + 1}</div>
      <div className="briefing-profile">person 2 goes here</div>

      <div id="text-box">
        Go to different <span className="keyword">Locations</span> and get in
        touch with our contact. Be careful. If you say the wrong thing to the
        wrong person, you may blow your <span className="keyword">Cover</span>!
        <br />
        <button onClick={startMap}>START</button>
      </div>
    </div>
  )
}

export default Briefing
