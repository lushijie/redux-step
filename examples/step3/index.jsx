import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import Counter from 'components/counter';
import * as counterAction from 'actions/counter';
import counterReducer from 'reducers/counter-index';

const store = createStore(counterReducer, {concatState: 6, calcState: 6});
console.log('initial state:', store.getState());

function render() {
  ReactDOM.render(
    <Counter
        value={store.getState()}
        onIncrement={() => {
        	store.dispatch(counterAction.incActionCreator(3));
        	console.log('current state:', store.getState());
        }}
        onDecrement={() => {
        	store.dispatch(counterAction.decActionCreator(2));
        	console.log('current state:', store.getState());
        }}
        onConcat={() => {
        	store.dispatch(counterAction.concatActionCreator(4));
        	console.log('current state:', store.getState());
        }}
    />,
    document.getElementById('app')
  )
}

//method1
store.subscribe(render);
render();
