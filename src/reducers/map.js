const map = (state = {loading: false, data: null}, action) => {
  switch (action.type) {
    case 'REQUEST_DATA':
      return { ...state, loading: true }
    case 'RECEIVE_DATA':
      return {
        ...state,
        loading: false,
        data: action.data.map((item, index) => ({...item, id: index}))
      }
    default:
      return state
  }
}

export default map;
