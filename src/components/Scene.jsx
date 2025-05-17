import useGame from "../hooks/useGame"
import Interactable from "./Interactable"

const Scene = () => {
  const { currentScene } = useGame()
  const npcs = currentScene.npcs

  return (
    <>
      {npcs.map((npc) => (
        <Interactable
          key={npc.name}
          x={npc.x}
          y={npc.y}
          name={npc.name}
        />
      ))}
    </>
  )
}

export default Scene
