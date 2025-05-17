import GameProvider from "./components/GameProvider"
import GameView from "./components/GameView"
import GameUi from "./components/GameUi"

const App = () => {
  return (
    <GameProvider>
      <div
        style={{
          width: "800px",
          height: "600px",
          margin: "auto",
          position: "relative",
        }}
      >
        <GameView />
        <GameUi />
      </div>
    </GameProvider>
  )
}

export default App
