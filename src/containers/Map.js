import { connect } from 'react-redux'
import { selectMarker, deselectMarker } from '../actions'

import MarkerList from '../components/MarkerList.js'

const getMarkers = (data, selectedId) => {
  return data
    ? data.map((marker) => ({
      id: data.indexOf(marker),
      position: marker.position,
      selected: marker.id === selectedId
    }))
    : []
}

const getActiveMarker = (data, selectedId) => {
  return selectedId !== null
    ? data.find((marker) => marker.id === selectedId)
    : null
}

const mapStateToProps = state => ({
  markers: getMarkers(state.map.data, state.markers.selectedId),
  activeMarker: getActiveMarker(state.map.data, state.markers.selectedId),
})

const mapDispatchToProps = dispatch => ({
  selectMarker: marker => dispatch(selectMarker(marker)),
  deselectMarker: () => dispatch(deselectMarker()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MarkerList)

