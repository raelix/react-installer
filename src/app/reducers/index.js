import { combineReducers } from 'redux'

const tabVisibilty = (state = {toggle : true}, action) => {
  switch (action.type) {
    case 'click':
      return  {
          toggle: !state.toggle
        }
    default:
      return state
  }
}

export default tabVisibilty
