const markers = (state = {selectedId: null}, action) => {
  switch (action.type) {
    case 'SELECT_MARKER':
      return { ...state, selectedId: action.marker.id }
    case 'DESELECT_MARKER':
      return { ...state, selectedId: null }
    default:
      return state
  }
}

export default markers;
