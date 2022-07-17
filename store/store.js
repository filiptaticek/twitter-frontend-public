import { createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"
import { createWrapper } from "next-redux-wrapper"
import rootReducer from "./reducers"

// initial states here
const initalState = {} //initial state of our app, empty object

// middleware
const middleware = [thunk] //using some random middleware

// creating store
export const store = createStore( //creating a store by rootReducer, with initalState and composed with some other middleware
  rootReducer,
  initalState,
  composeWithDevTools(applyMiddleware(...middleware))
)

// assigning store to next wrapper
const makeStore = () => store //making a store by a created store

export const wrapper = createWrapper(makeStore) //creating and exporting a wrapper