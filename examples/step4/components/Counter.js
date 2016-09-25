import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as counterAction from '../actions/counter';
import './counter.scss';

class Counter extends Component {
  render() {
    const {dispatch} = this.props;
    return (
      <p>
        <button className="btn" onClick={() => {
          dispatch(counterAction.incActionCreator(3));
        }}>
          +
        </button>
        <button className="btn" onClick={() => {
          dispatch(counterAction.decActionCreator(2));
        }}>
          -
        </button>
        <button className="btn" onClick={() => {
          dispatch(counterAction.concatActionCreator(4));
        }}>
          +(concat)
        </button>
      </p>
    )
  }
}

export default connect()(Counter)
