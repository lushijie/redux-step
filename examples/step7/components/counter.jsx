import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as counterAction from '../actions/counter';
import {bindActionCreators} from 'redux';
import './counter.scss';

class Counter extends Component {
  render() {
    const {calcState, concatState, actions, custom} = this.props;
    console.log('this.props', this.props);
    //console.log('actions', actions);
    console.log('ownProps', custom);
    return (
      <div>
        <div>
          <h3>calcState= {calcState}</h3>
          <h3>calcState= {concatState}</h3>
        </div>

        <button className="btn" onClick={() => {
          actions.incActionCreator(3);
          //console.log('calcState when click:', calcState);
        }}>
          +
        </button>
        <button className="btn" onClick={() => {
          actions.decActionCreator(2);
          //console.log('calcState when click:', calcState);
        }}>
          -
        </button>
        <button className="btn" onClick={() => {
          actions.concatActionCreator(4);
          //console.log('concatState when click', concatState);
        }}>
          +(concat)
        </button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return (
      //一般一个组件使用一个state，这里只是为了达到演示
      //{state: state.concatState}
      {
        concatState: state.concatState,
        calcState: state.calcState
      }
  );
}

const mapDispathToProps = (dispatch) => {
  return (
    {
      actions: bindActionCreators(counterAction , dispatch)
    }
  );
}

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  return (
    {
      ...ownProps,
      ...stateProps,
      ...dispatchProps
    }
  )
  // return方式可以根据实际情况灵活改变,如
  // return (
  //   {
  //     ...ownProps,
  //     state: stateProps,
  //     ...dispatchProps
  //   }
  // )
}

export default connect(mapStateToProps, mapDispathToProps, mergeProps)(Counter)
