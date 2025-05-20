import useGame from "../hooks/useGame"

const GameUi = () => {
  const { currentText, currentScene, goToScene, cover, availableScenes } =
    useGame()

  const isScene = (scene) => currentScene === scene

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
      <div id="text-box">{currentText}</div>
    </>
  )
}

export default GameUi
