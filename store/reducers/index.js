import { combineReducers } from "redux"
import visibleReducer from "./visibleReducer"
import usersReducer from "./usersReducer"
import colorReducer from "./colorReducer"

export default combineReducers({
  visibility: visibleReducer,
  users: usersReducer,
  color: colorReducer
})