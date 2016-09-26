import { combineReducers } from 'redux'
import concatState from './counter-concat'
import calcState from './counter-calc'

export default combineReducers({
  concatState,
  calcState
})
