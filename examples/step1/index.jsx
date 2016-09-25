import React from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'
import Counter from 'components/counter'
import CounterReducer from 'reducers/counter'


const store = createStore(CounterReducer, 10);
console.log('initial state:', store.getState());

function render() {
  ReactDOM.render(
    <Counter
        value={store.getState()}
        onIncrement={() => {
            store.dispatch({ type: 'INCREMENT' });
            console.log('current state:', store.getState());
        }}
        onDecrement={() => {
            store.dispatch({ type: 'DECREMENT' });
            console.log('current state:', store.getState());
        }}
    />,
    document.getElementById('app')
  )
}

//demo1 渲染组件
store.subscribe(render);
render();

//demo 2 渲染body
// store.subscribe(() => {
//  console.log('current state', store.getState());
// 	document.body.innerText = store.getState();
// })
// store.dispatch({type: 'INCREMENT'});

