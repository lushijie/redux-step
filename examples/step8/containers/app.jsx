import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as counterAction from 'actions/counter';
import {bindActionCreators} from 'redux';
import Result from 'components/result';
import Operator from 'components/operator';

class Counter extends Component {
  render() {
    const {calcState, concatState, actions, custom} = this.props;
    console.log('this.props', this.props);
    console.log('ownProps', custom);
    return (
      <div>
        <Result calcState={calcState} concatState={concatState} />
        <Operator actions={actions} />
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
