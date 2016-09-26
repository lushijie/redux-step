import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import createLogger from 'redux-logger';
import Counter from './components/counter';
//import * as counterAction from './actions/counter';
import counterReducer from './reducers/counter-index';

//const store = createStore(counterReducer, {concatState: 6, calcState: 10});

const logger = createLogger();
let enhanceCreateStore = applyMiddleware(logger)(createStore);
const store = enhanceCreateStore(counterReducer, {concatState: 6, calcState: 10});

ReactDOM.render(
  <Provider store={store}>
    <Counter custom={{"msg": "This is ownProps!"}} />
  </Provider>,
  document.getElementById('app')
);
