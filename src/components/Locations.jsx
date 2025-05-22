import useGame from "../hooks/useGame"

const Locations = () => {
  const { availableScenes, currentScene, goToScene } = useGame()

  const isScene = (scene) => currentScene === scene

  return (
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
  )
}

export default Locations
