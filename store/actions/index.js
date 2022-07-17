import { TOGGLE_VISIBILITY, SET_VISIBLE, ADD_USER, CHANGE_COLOR } from "../types"

export const toggleVisibility = () => async dispatch => {
  dispatch({
    type: TOGGLE_VISIBILITY,
  })
}

export const setVisible = () => async dispatch => {
  dispatch({
    type: SET_VISIBLE,
  })
}

export const addUser = (usera) => async dispatch => {
  dispatch({
    type: ADD_USER,
    data:{
      user:usera
    }
  })
}

export const changeColor = (newSchema) => async dispatch => {
  dispatch({
    type: CHANGE_COLOR,
    data:{
      scheme:newSchema
    }
  })
}