import React from 'react'
import Marker from './Marker.js'
import Details from './Details.js'

import backgroundMap from '../images/background-map.jpg'

const MarkerList = ({ markers, activeMarker, selectMarker, deselectMarker }) => ([
  <img src={backgroundMap} onClick={() => deselectMarker() } className="Map" alt="map" key="background" />,
  activeMarker && <Details data={activeMarker} key="details"/>,
  markers.map(marker =>
    <Marker
      key={marker.id}
      selected={marker.selected}
      position={marker.position}
      onClick={(event) => {
        event.stopPropagation();
        selectMarker(marker)
      }}
    />
  )
])

export default MarkerList
