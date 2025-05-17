import { Assets, Texture } from "pixi.js"
import { useEffect, useRef, useState } from "react"
import images from "../data/images"
import npcs from "../data/npcs"
import useGame from "../hooks/useGame"
import { DEFAULT_TEXT } from "../data/constants"

const Interactable = ({ x, y, height, width, name = "wonda" }) => {
  const { setCurrentText } = useGame()
  const spriteRef = useRef(null)

  const [texture, setTexture] = useState(Texture.EMPTY)
  const [isHovered, setIsHover] = useState(false)
  const [isActive, setIsActive] = useState(false)
  const [scale, setScale] = useState({ hover: 1.15, default: 1 })

  useEffect(() => {
    if (texture === Texture.EMPTY) {
      Assets.load(images[name].src).then((result) => {
        setTexture(result)
        setScale({
          hover: images[name].scale * 1.15,
          default: images[name].scale,
        })
      })
    }
  }, [name, texture])

  const onClick = () => {
    setIsActive(!isActive)
  }

  const onPointerOver = () => {
    setIsHover(true)
    setCurrentText(npcs[name].name)
  }
  const onPointerOut = () => {
    setIsHover(false)
    setCurrentText(DEFAULT_TEXT)
  }

  return (
    <pixiSprite
      ref={spriteRef}
      anchor={0.5}
      eventMode={"static"}
      onClick={onClick}
      onPointerOver={onPointerOver}
      onPointerOut={onPointerOut}
      scale={isActive && isHovered ? scale.hover : scale.default}
      tint={isHovered ? 0x00ffff : 0xffffff}
      texture={texture}
      height={height}
      width={width}
      x={x}
      y={y}
    />
  )
}

export default Interactable
