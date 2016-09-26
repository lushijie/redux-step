import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import createLogger from 'redux-logger';
import Counter from './components/counter';
import DevTools from './devtools';
//import * as counterAction from './actions/counter';
import counterReducer from './reducers/counter-index';

const logger = createLogger();
const enhancer = compose(
  applyMiddleware(logger),
  DevTools.instrument()
)
const store = createStore(counterReducer, {concatState: 6, calcState: 10}, enhancer);

//normal createStore
//const store = createStore(counterReducer, {concatState: 6, calcState: 10});

//enhanceCreateStore
// const logger = createLogger();
// let enhanceCreateStore = applyMiddleware(logger)(createStore);
// const store = enhanceCreateStore(counterReducer, {concatState: 6, calcState: 10});

ReactDOM.render(
  <Provider store={store}>
    <div>
        <Counter custom={{"msg": "This is ownProps!"}} />
        <DevTools />
    </div>
  </Provider>,
  document.getElementById('app')
);
