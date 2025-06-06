import useGame from "../hooks/useGame"
import Cover from "./Cover"
import CoverModal from "./CoverModal"
import Locations from "./Locations"
import dialogue from "../data/dialogue"
import Hints from "./Hints"

const GameUi = () => {
  const {
    currentText,
    inDialogue,
    endDialogue,
    currentNpcName,
    revealToNpc,
    attackNpc,
    hasRevealed,
    currentLevel,
  } = useGame()

  return (
    <>
      <Hints />
      <Locations />
      {currentLevel !== 2 && (
        <>
          <Cover />
          <CoverModal />
        </>
      )}
      {inDialogue && (
        <div id="text-box">
          <>
            <strong>{currentNpcName}: </strong>
            {currentText}
            <hr />
            {!hasRevealed && (
              <div className="dialogue-option">
                {currentLevel < 2 ? (
                  <>
                    <span
                      className="dialogue-click"
                      onClick={revealToNpc}
                    >
                      REVEAL
                    </span>
                    {dialogue.reveal}
                  </>
                ) : (
                  <>
                    <span
                      className="dialogue-click"
                      onClick={attackNpc}
                    >
                      ATTACK
                    </span>
                    <strong>Are you sure?</strong> If you injure a civilian, the
                    game is over!
                  </>
                )}
              </div>
            )}
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
