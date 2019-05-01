import fetch from 'cross-fetch'

export const requestData = () => ({
  type: 'REQUEST_DATA',
})

export const receiveData = (json) => ({
  type: 'RECEIVE_DATA',
  data: json,
})

export const selectMarker = marker => ({
  type: 'SELECT_MARKER',
  marker,
})

export const deselectMarker = marker => ({
  type: 'DESELECT_MARKER',
  marker,
})

export function fetchData() {
  return dispatch => {
    dispatch(requestData())
    return fetch(`/map-data.json`)
      .then(response => response.json())
      .then(json => dispatch(receiveData(json)))
  }
}
