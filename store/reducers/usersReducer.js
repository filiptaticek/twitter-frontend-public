import { ADD_USER } from "../types"

const usersReducer = (state = "", action) => {
  switch (action.type) {
  case ADD_USER: {
    return(action.data.user)
  }
  default:
    return state
  }
}

export default usersReducer