import { useState } from "react"

const Credits = () => {
  const [showCredits, setShowCredits] = useState(false)
  return (
    <div id="credits">
      <h3 onClick={() => setShowCredits(!showCredits)}>Credits</h3>
      <ul
        id="credits"
        style={{ display: showCredits ? "block" : "none" }}
      >
        <li>
          <strong>Game Design, Graphics: </strong>Steven "Razlo" Bailey
        </li>
        <li>
          <strong>Code: </strong>Jen "Jowday" Guerra
        </li>
        <li>
          <strong>Rendering Engine: </strong>
          <a
            href="https://react.pixijs.io/"
            target="_blank"
          >
            PixiJS React
          </a>
        </li>
        <li>
          <strong>Color Theme: </strong>
          <a
            href="https://lospec.com/palette-list/lava-gb"
            target="_blank"
          >
            LAVA-GB PALLETE by Aero
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Credits
