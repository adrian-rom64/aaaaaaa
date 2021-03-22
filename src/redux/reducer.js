import * as actions from './actions'

const initialState = {
  counter: 0,
  a: 1
}

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.INCREMENT:
      return { ...state, counter: state.counter + 1 }
    default:
      return state
  }
}
