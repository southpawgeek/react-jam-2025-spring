import images from "../data/images"
import useGame from "../hooks/useGame"
import { useState } from "react"

const Map = () => {
  const { goToLocation, currentLevel } = useGame()
  return (
    <div
      id="map"
      style={{
        backgroundImage: `url('${images.bgMap.src}')`,
        backgroundSize: "115%",
        backgroundPosition: "center",
      }}
    >
      {currentLevel === 1 && (
        <>
          <div
            className="map-location"
            onClick={() => goToLocation(0)}
            style={{ top: "65px", right: "300px" }}
          >
            <img
              src={images.mapLabelRussia.src}
              alt="Russia"
              className="map-label"
            />
            <img
              src={images.mapArrow.src}
              alt="Arrow"
              className="map-arrow"
            />
          </div>
          <div
            class="map-location"
            onClick={() => goToLocation(1)}
            style={{ top: "150px", right: "155px" }}
          >
            <img
              src={images.mapLabelThailand.src}
              alt="Thailand"
              className="map-label"
            />
            <img
              src={images.mapArrow.src}
              alt="Arrow"
              className="map-arrow"
            />
          </div>
        </>
      )}
    </div>
  )
}

export default Map
