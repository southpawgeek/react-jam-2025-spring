import { Application, extend } from "@pixi/react"
import { Container, Graphics, Sprite } from "pixi.js"
import { useRef } from "react"
import Scene from "./Scene"

extend({
  Container,
  Graphics,
  Sprite,
})

const GameView = () => {
  const divRef = useRef(null)
  return (
    <div
      ref={divRef}
      style={{ width: "800px", height: "600px", position: "absolute" }}
    >
      <Application
        resizeTo={divRef}
        backgroundColor={0x006666}
      >
        <Scene />
      </Application>
    </div>
  )
}

export default GameView
