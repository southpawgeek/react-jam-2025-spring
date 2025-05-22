import useGame from "../hooks/useGame"
import Cover from "./Cover"
import CoverModal from "./CoverModal"
import Locations from "./Locations"
import dialogue from "../data/dialogue"

const GameUi = () => {
  const { currentText, inDialogue, endDialogue, currentNpcName } = useGame()

  return (
    <>
      <Cover />
      <Locations />
      <CoverModal />
      <div id="text-box">
        {inDialogue ? (
          <>
            <strong>{currentNpcName}: </strong>
            {currentText}
            <hr />
            <div className="dialogue-option">
              <span className="dialogue-click">REVEAL</span>
              {dialogue.reveal}
            </div>
            <div className="dialogue-option">
              <span
                className="dialogue-click"
                onClick={endDialogue}
              >
                END
              </span>
              <span className="dialogue-option">{dialogue.end}</span>
            </div>
          </>
        ) : (
          currentText
        )}
      </div>
    </>
  )
}

export default GameUi
