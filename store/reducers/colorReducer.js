const colorReducer = (state = ["white","black","white"], action) => {
  switch (action.type) {
  case "CHANGE_COLOR":{
    return (action.data.scheme)
  }
  default:
    return state
  }
}

export default colorReducer
