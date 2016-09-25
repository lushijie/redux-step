import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as counterAction from '../actions/counter';
import './counter.scss';

class Counter extends Component {
  render() {
    const {dispatch, concatState, calcState} = this.props;
    return (
      <p>
        <button className="btn" onClick={() => {
          dispatch(counterAction.incActionCreator(3));
          console.log('current calcState:', calcState);
        }}>
          +
        </button>
        <button className="btn" onClick={() => {
          dispatch(counterAction.decActionCreator(2));
          console.log('current calcState:', calcState);
        }}>
          -
        </button>
        <button className="btn" onClick={() => {
          dispatch(counterAction.concatActionCreator(4));
          console.log('current concatState', concatState);
        }}>
          +(concat)
        </button>
      </p>
    )
  }
}

function mapStateToProps(state) {
  return (
      {
        concatState: state.concatState,
        calcState: state.calcState
      }
  );
}

export default connect(mapStateToProps)(Counter)
