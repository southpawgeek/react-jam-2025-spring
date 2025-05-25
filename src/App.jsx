import GameProvider from "./components/GameProvider"
import Credits from "./components/Credits"
import Display from "./components/Display"
import Debug from "./components/Debug"

const App = () => {
  return (
    <GameProvider>
      <div id="main">
        <Display />
      </div>
      <Credits />
      <Debug />
    </GameProvider>
  )
}

export default App
