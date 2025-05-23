import useGame from "../hooks/useGame"
import GameView from "./GameView"
import GameUi from "./GameUi"
import Title from "./Title"
import Briefing from "./Briefing"
import Map from "./Map"
import Lose from "./Lose"
import Win from "./Win"

const Display = () => {
  const { displayType } = useGame()

  switch (displayType) {
    case "title":
      return <Title />
    case "briefing":
      return <Briefing />
    case "map":
      return <Map />
    case "location":
      return (
        <>
          <GameView />
          <GameUi />
        </>
      )
    case "lose":
      return <Lose />
    case "win":
      return <Win />
  }
}

export default Display
