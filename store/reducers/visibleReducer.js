import { TOGGLE_VISIBILITY, SET_VISIBLE } from "../types"

const visibleReducer = (state = false, action) => {
  switch (action.type) {
  case TOGGLE_VISIBILITY:
    return (!state)
  case SET_VISIBLE:
    return (true)
  default:
    return state
  }
}

export default visibleReducer
