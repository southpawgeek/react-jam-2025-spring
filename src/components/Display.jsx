import useGame from "../hooks/useGame"
import GameView from "./GameView"
import GameUi from "./GameUi"
import Title from "./Title"
import Briefing from "./Briefing"
import Lose from "./Lose"
import Win from "./Win"

const Display = () => {
  const { displayType } = useGame()

  if (displayType === "title") return <Title />
  if (displayType === "briefing") return <Briefing />
  if (displayType === "map")
    return (
      <>
        <GameView />
        <GameUi />
      </>
    )
  if (displayType === "lose") return <Lose />
  if (displayType === "win") return <Win />
}

export default Display
