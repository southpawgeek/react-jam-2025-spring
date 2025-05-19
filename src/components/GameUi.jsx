import useGame from "../hooks/useGame"
import scenes from "../data/scenes"

const GameUi = () => {
  const { currentText, setCurrentText, currentScene, setCurrentScene, cover } =
    useGame()

  const goToScene = (scene) => {
    setCurrentScene(scenes[scene])
    setCurrentText(scenes[scene].defaultText)
  }

  return (
    <>
      <h1>Cover</h1>
      <span id="cover">{String.fromCharCode(0x00a9).repeat(cover)}</span>
      <>
        <h2>Locations</h2>
        <ul id="locations-list">
          {Object.keys(scenes).map((scene) => (
            <li
              key={scene}
              onClick={() => goToScene(scene)}
            >
              {currentScene === scenes[scene] ? ">" : null} {scenes[scene].name}
            </li>
          ))}
        </ul>
      </>
      <div id="text-box">{currentText}</div>
    </>
  )
}

export default GameUi
