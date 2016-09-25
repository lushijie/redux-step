import React, { Component, PropTypes } from 'react'
import {Provider, connect} from 'react-redux'
import * as counterAction from '../actions/counter'


class Counter extends Component {
  render() {
    const { dispatch } = this.props
    return (
      <p>
        {' '}
        <button onClick={() => {
          dispatch(counterAction.incActionCreator(3));
        }}>
          +
        </button>
        {' '}
        <button onClick={() => {
          dispatch(counterAction.decActionCreator(2));
        }}>
          -
        </button>
        {' '}
        <button onClick={() => {
          dispatch(counterAction.concatActionCreator(4));
        }}>
          +(concat)
        </button>
      </p>
    )
  }
}

// Counter.propTypes = {
//   onIncrement: PropTypes.func.isRequired,
//   onDecrement: PropTypes.func.isRequired,
//   onConcat: PropTypes.func.isRequired
// }

export default connect()(Counter)
