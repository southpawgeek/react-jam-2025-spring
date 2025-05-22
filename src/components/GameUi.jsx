import useGame from "../hooks/useGame"
import Cover from "./Cover"
import CoverModal from "./CoverModal"
import Locations from "./Locations"

const GameUi = () => {
  const { currentText, setCoverBlowShow } = useGame()

  return (
    <>
      <Cover />
      <Locations />
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
