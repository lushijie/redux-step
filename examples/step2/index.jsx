import React from 'react';
import ReactDOM from 'react-dom';
import { bindActionCreators, createStore } from 'redux';
import Counter from 'components/counter';
import * as counterAction from 'actions/counter.js';
import counterReducer from 'reducers/counter';

const store = createStore(counterReducer, 8);
var incActionCreators = bindActionCreators(counterAction.incActionCreator, store.dispatch);

function render() {
  ReactDOM.render(
    <Counter
        value={store.getState()}
        onIncrement={() => incActionCreators(5)}
        //onIncrement={() => store.dispatch(counterAction.incActionCreator(3))}
        onDecrement={() => store.dispatch(counterAction.decActionCreator(2))}
    />,
    document.getElementById('app')
  )
}

//组件渲染
store.subscribe(render);
render();

