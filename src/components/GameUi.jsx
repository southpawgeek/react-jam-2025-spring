import useGame from "../hooks/useGame"
import Cover from "./Cover"
import CoverModal from "./CoverModal"
import Locations from "./Locations"

const GameUi = () => {
  const {
    currentText,
    currentScene,
    goToScene,
    cover,
    availableScenes,
    setCoverBlowShow,
  } = useGame()

  return (
    <>
      <Cover cover={cover} />
      <Locations
        availableScenes={availableScenes}
        currentScene={currentScene}
        goToScene={goToScene}
      />
      <CoverModal />
      <div id="text-box">
        {currentText}
        <br />
        <button onClick={() => setCoverBlowShow(true)}>
          DEBUG - BLOW COVER
        </button>
      </div>
    </>
  )
}

export default GameUi
