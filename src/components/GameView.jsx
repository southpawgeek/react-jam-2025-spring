import { Application, extend } from "@pixi/react"
import { Container, Graphics, Sprite } from "pixi.js"
import Interactable from "./Interactable"

extend({
  Container,
  Graphics,
  Sprite,
})

const GameView = () => {
  return (
    <Application>
      <pixiContainer>
        <Interactable
          x={100}
          y={100}
          name="fred"
        />
        <Interactable
          x={100}
          y={200}
          name="wonda"
        />
        <Interactable
          x={300}
          y={200}
          name="biggy"
        />
        <Interactable
          x={300}
          y={400}
          name="capsly"
        />
        <Interactable
          x={200}
          y={500}
          name="dotti"
        />
        <Interactable
          x={600}
          y={300}
          name="fab"
        />
      </pixiContainer>
    </Application>
  )
}

export default GameView
