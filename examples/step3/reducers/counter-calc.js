import * as counterAction from '../actions/counter.js'

export default function calcReducer(state = 0, action) {
  console.log(...state);
  switch (action.type) {
    case counterAction.actionTypes.INCREMENT:
      return state + action.step
    case counterAction.actionTypes.DECREMENT:
      return state - action.step
    default:
      return state
  }
}
