import React from 'react'
import ReactDOM from 'react-dom'
import {render} from 'react-dom'
import {createStore} from 'redux'
import {Provider, connect} from 'react-redux'

// Componect,action,reducer
import Counter from './components/Counter'
import * as counterAction from './actions/counter'
import counterReducer from './reducers/counter-index'

const store = createStore(counterReducer, {concatReducer: 6, calcReducer: 10});

render(
  <Provider store={store}>
    <Counter />
  </Provider>,
  document.getElementById('root')
);

// function render() {
//   ReactDOM.render(
//     <Counter
//       value={store.getState()}
//       onIncrement={() => {
//       	store.dispatch(counterAction.incActionCreator(3));
//       	console.log(store.getState());
//       }}
//       onDecrement={() => {
//       	store.dispatch(counterAction.decActionCreator(2));
//       	console.log(store.getState());
//       }}
//       onConcat={() => {
//       	store.dispatch(counterAction.concatActionCreator(4));
//       	console.log(store.getState());
//       }}
//     />,
//     document.getElementById('root')
//   )
// }

//method1
// store.subscribe(render)
// render()
