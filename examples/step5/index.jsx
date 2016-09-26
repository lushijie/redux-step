import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { bindActionCreators, createStore, applyMiddleware} from 'redux';
import Counter from 'components/counter';
import * as counterAction from 'actions/counter.js';
import counterReducer from 'reducers/counter';

const store = createStore(counterReducer, 8, applyMiddleware(thunk));
var incActionCreators = bindActionCreators(counterAction.incActionCreator, store.dispatch);


function render() {
  ReactDOM.render(
    <Counter
        value={store.getState()}
        onIncrement={() => incActionCreators(3)}
        onAsyncIncrement={() => store.dispatch(counterAction.asyncIncActionCreator(2))}
        onDecrement={() => store.dispatch(counterAction.decActionCreator(3))}
        onAsyncDecrement={() => store.dispatch(counterAction.asyncDecActionCreator(2))}
    />,
    document.getElementById('app')
  )
}

//组件渲染
store.subscribe(render);
render();

