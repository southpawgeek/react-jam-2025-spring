import useGame from "../hooks/useGame"

const Locations = () => {
  const { currentScene, setDisplayType, currentLevel } = useGame()

  return (
    <>
      <h2>Current Location: {currentScene.name}</h2>
      {currentLevel > 0 && <button id="map-button" onClick={()=>setDisplayType("map")}>GO TO WORLD MAP</button>}
    </>
  )
}

export default Locations
