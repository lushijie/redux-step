import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import createLogger from 'redux-logger';
import Counter from 'containers/app';
import counterReducer from './reducers/counter-index';

//normal createStore
//const store = createStore(counterReducer, {concatState: 6, calcState: 10});

//enhanceCreateStore
const logger = createLogger();
let enhanceCreateStore = applyMiddleware(logger)(createStore);
const store = enhanceCreateStore(counterReducer, {concatState: 6, calcState: 10});

ReactDOM.render(
  <Provider store={store}>
    <div>
        <Counter custom={{"msg": "This is ownProps!"}} />
    </div>
  </Provider>,
  document.getElementById('app')
);
