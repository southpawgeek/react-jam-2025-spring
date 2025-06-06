import { Assets, Texture } from "pixi.js"
import { useEffect, useRef, useState } from "react"
import images from "../data/images"
import scenes from "../data/scenes"
import useGame from "../hooks/useGame"

const Background = ({ x, y, height = 600, width = 800, name }) => {
  const { setCurrentText, inDialogue } = useGame()
  const spriteRef = useRef(null)

  const [texture, setTexture] = useState(Texture.EMPTY)

  const onClick = () => {
    setCurrentText(scenes[name].defaultText)
  }

  useEffect(() => {
    if (texture === Texture.EMPTY || texture !== images[name].src) {
      Assets.load(images[name].src).then((result) => {
        setTexture(result)
      })
    }
  }, [name, texture])

  return (
    <pixiSprite
      ref={spriteRef}
      eventMode={"static"}
      onPointerTap={!inDialogue && onClick}
      onClick={!inDialogue && onClick}
      scale={images[name].scale}
      texture={texture}
      height={height}
      width={width}
      x={x}
      y={y}
    />
  )
}

export default Background
