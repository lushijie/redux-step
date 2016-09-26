import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as counterAction from '../actions/counter';
import {bindActionCreators} from 'redux';
import './counter.scss';

class Counter extends Component {
  render() {
    const {calcState, concatState, actions} = this.props;
    console.log('this.props', this.props);
    console.log('actions', actions);
    return (
      <div>
        <div>
          <h3>calcState= {calcState}</h3>
          <h3>calcState= {concatState}</h3>
        </div>

        <button className="btn" onClick={() => {
          actions.incActionCreator(3);
          console.log('calcState when click:', calcState);
        }}>
          +
        </button>
        <button className="btn" onClick={() => {
          actions.decActionCreator(2);
          console.log('calcState when click:', calcState);
        }}>
          -
        </button>
        <button className="btn" onClick={() => {
          actions.concatActionCreator(4);
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

function mapDispathToProps(dispatch) {
  return (
    {
      actions: bindActionCreators(counterAction , dispatch)
    }
  );
}

export default connect(mapStateToProps, mapDispathToProps)(Counter)
