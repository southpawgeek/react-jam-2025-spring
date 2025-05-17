import GameProvider from "./components/GameProvider"
import GameView from "./components/GameView"
import GameText from "./components/GameText"

const App = () => {
  return (
    <GameProvider>
      <GameView />
      <GameText />
    </GameProvider>
  )
}

export default App
