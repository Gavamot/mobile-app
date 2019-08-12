import Actions from './actions/crud'

const counter = (state = { number : 0}, action)=> {

  var newState = { ...state };
  switch (action.type) {
    case Actions.INCREMENT:
      newState.number += 1;
      return newState;
    case 'INCREMENT_IF_ODD':
      newState.number = (newState.number % 2 !== 0) ? newState.number + 1 : newState.number;
      return newState;
    case 'DECREMENT':
      newState.number -= 1;
      return newState
    default:
      return state
  }
}

export default counter;
