import useGame from "../hooks/useGame"
import Keyword from "./Keyword"

const CoverModal = () => {
  const { cover, gameOver, coverBlowShow, setCoverBlowShow } = useGame()

  const handleCoverBlowClick = () => {
    if (cover < 1) {
      gameOver()
    } else {
      setCoverBlowShow(false)
    }
  }

  return (
    <div
      id="cover-modal"
      style={{ display: coverBlowShow ? "block" : "none" }}
    >
      {cover > 0 ? (
        <>
          You lost a <strong>Cover</strong> point. Lose them all and the game is
          over!
        </>
      ) : (
        <>
          You blew all your <strong>Cover</strong>!
        </>
      )}

      <br />
      <button onClick={handleCoverBlowClick}>OK</button>
    </div>
  )
}

export default CoverModal
