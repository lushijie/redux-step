import * as counterAction from '../actions/counter.js'

export default function catReducer(state = 0, action) {
  switch (action.type) {
    case counterAction.actionTypes.CONCAT:
      return state + action.value.toString();
    default:
      return state
  }
}
