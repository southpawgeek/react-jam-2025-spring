import useGame from "../hooks/useGame"
import Cover from "./Cover"
import CoverModal from "./CoverModal"
import Locations from "./Locations"
import dialogue from "../data/dialogue"

const GameUi = () => {
  const { currentText, inDialogue, endDialogue, currentNpcName, revealToNpc } =
    useGame()

  return (
    <>
      <Cover />
      <Locations />
      <CoverModal />
      {inDialogue && (
        <div id="text-box">
          <>
            <strong>{currentNpcName}: </strong>
            {currentText}
            <hr />
            <div className="dialogue-option">
              <span
                className="dialogue-click"
                onClick={revealToNpc}
              >
                REVEAL
              </span>
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
        </div>
      )}
    </>
  )
}

export default GameUi
