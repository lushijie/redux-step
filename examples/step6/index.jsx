import React from 'react';
import ReactDOM from 'react-dom';
//import {render} from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import Counter from './components/counter';
//import * as counterAction from './actions/counter';
import counterReducer from './reducers/counter-index';

const store = createStore(counterReducer, {concatState: 6, calcState: 10});

ReactDOM.render(
  <Provider store={store}>
    <Counter />
  </Provider>,
  document.getElementById('app')
);
