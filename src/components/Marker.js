import React from 'react'

const Marker = ({ onClick, selected, position }) => (
  <div className="Marker"
    onClick={onClick}
    style={{
      backgroundImage: selected ? 'url(/marker-selected.png)' : 'url(/marker.png)',
      left: position[0],
      top: position[1],
    }}
  ></div>
)

export default Marker
