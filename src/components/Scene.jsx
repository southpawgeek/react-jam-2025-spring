import useGame from "../hooks/useGame"
import Interactable from "./Interactable"
import Background from "./Background"

const Scene = () => {
  const { currentScene } = useGame()
  const npcs = currentScene.npcs
  const background = currentScene?.background || null

  return (
    <>
      {background && <Background name={background} />}
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
