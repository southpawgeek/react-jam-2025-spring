import useGame from "../hooks/useGame"
import { useState } from "react"

const GameUi = () => {
  const {
    currentText,
    currentScene,
    goToScene,
    cover,
    availableScenes,
    gameOver,
  } = useGame()
  const [coverBlowShow, setCoverBlowShow] = useState(false)

  const isScene = (scene) => currentScene === scene

  const handleCoverBlowClick = () => {
    if (cover < 1) {
      gameOver()
    } else {
      setCoverBlowShow(false)
    }
  }

  return (
    <>
      <h1>Cover</h1>
      <span id="cover">{String.fromCharCode(0x00a9).repeat(cover)}</span>
      <>
        <h2>Locations</h2>
        <ul id="locations-list">
          {availableScenes.map((scene) => {
            const current = isScene(scene)

            return (
              <li
                key={`scene-${scene.name}`}
                onClick={current ? null : () => goToScene(scene)}
                style={{
                  cursor: current ? "default" : "pointer",
                }}
              >
                {current ? ">" : null} {scene.name}
              </li>
            )
          })}
        </ul>
      </>
      <div
        id="cover-modal"
        style={{ display: coverBlowShow ? "block" : "none" }}
      >
        {cover > 0 ? (
          <>
            You lost a <span className="keyword">Cover</span> point. Lose them
            all and the game is over!
          </>
        ) : (
          <>
            You blew all your <span className="keyword">Cover</span> :(
          </>
        )}

        <br />
        <button onClick={handleCoverBlowClick}>OK</button>
      </div>
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
