import * as actions from './actions'

const initialState = {
  token: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.SET_TOKEN:
      return { ...state, token: action.token }
    default:
      return state
  }
}
