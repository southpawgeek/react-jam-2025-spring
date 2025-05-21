import useGame from "../hooks/useGame"

const Title = () => {
  const { setDisplayType } = useGame()

  return (
    <div id='title-display'>
      Cloudy Contacts
      <br />
      <button onClick={() => setDisplayType("briefing")}>BEGIN MISSION</button>
    </div>
  )
}

export default Title
