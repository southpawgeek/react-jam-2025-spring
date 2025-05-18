import { Application, extend } from "@pixi/react"
import { Container, Graphics, Sprite } from "pixi.js"
import { useRef, useState } from "react"
import Scene from "./Scene"

extend({
  Container,
  Graphics,
  Sprite,
})

const GameView = () => {
  const [showCredits, setShowCredits] = useState(false)
  const divRef = useRef(null)
  return (
    <div
      ref={divRef}
      style={{ width: "800px", height: "600px", position: "absolute" }}
    >
      <Application
        resizeTo={divRef}
        backgroundColor={0x051f39}
      >
        <Scene />
      </Application>
      <h3 onClick={() => setShowCredits(!showCredits)}>Credits</h3>
      <ul id="credits" style={{display: showCredits ? "block" : "none"}}>
        <li><strong>Game Design, Graphics: </strong>Steven "Razlo" Bailey</li>
        <li><strong>Code: </strong>Jen "Jowday" Guerra</li>
        <li><strong>Rendering Engine: </strong><a href="https://react.pixijs.io/" target="_blank">PixiJS React</a></li>
        <li><strong>Color Theme: </strong><a href="https://lospec.com/palette-list/lava-gb" target="_blank">LAVA-GB PALLETE by Aero</a></li>
      </ul>
    </div>
  )
}

export default GameView
