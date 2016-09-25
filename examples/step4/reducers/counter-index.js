import { combineReducers } from 'redux'
import concatReducer from './counter-concat'
import calcReducer from './counter-calc'

export default combineReducers({
  concatReducer,
  calcReducer
})
