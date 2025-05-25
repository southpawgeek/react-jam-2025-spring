import GameProvider from "./components/GameProvider"
import Credits from "./components/Credits"
import Display from "./components/Display"

const App = () => {
  return (
    <GameProvider>
      <div id="main">
        <Display />
      </div>
      <Credits />
    </GameProvider>
  )
}

export default App
