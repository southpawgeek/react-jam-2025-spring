import useGame from "../hooks/useGame"
import scenes from "../data/scenes"

const GameUi = () => {
  const { currentText, currentScene, setCurrentScene } = useGame()

  return (
    <>
      <h1>Locations</h1>
      <ul id="locations-list">
        {Object.keys(scenes).map((scene) => (
          <li
            key={scene}
            onClick={() => setCurrentScene(scenes[scene])}
          >
            {currentScene === scenes[scene] ? ">" : null} {scenes[scene].name}
          </li>
        ))}
      </ul>
      <div id="text-box">{currentText}</div>
    </>
  )
}

export default GameUi
