import useGame from "../hooks/useGame"

const Cover = () => {
  const { cover } = useGame()
  return (
    <>
      <h1>Cover</h1>
      <span id="cover">{String.fromCharCode(0x00a9).repeat(cover)}</span>
    </>
  )
}

export default Cover
