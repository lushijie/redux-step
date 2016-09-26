import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as counterAction from '../actions/counter';
import './counter.scss';

class Counter extends Component {
  render() {
    const {dispatch, calcState, concatState, custom} = this.props;
    console.log('this.props', this.props);
    console.log('ownProps', custom);
    return (
      <div>
        <div>
          <h3>calcState= {calcState}</h3>
          <h3>calcState= {concatState}</h3>
        </div>

        <button className="btn" onClick={() => {
          dispatch(counterAction.incActionCreator(3));
          console.log('calcState when click:', calcState);
        }}>
          +
        </button>
        <button className="btn" onClick={() => {
          dispatch(counterAction.decActionCreator(2));
          console.log('calcState when click:', calcState);
        }}>
          -
        </button>
        <button className="btn" onClick={() => {
          dispatch(counterAction.concatActionCreator(4));
          console.log('concatState when click', concatState);
        }}>
          +(concat)
        </button>
      </div>
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
