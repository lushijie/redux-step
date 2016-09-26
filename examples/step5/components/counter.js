import React, {PropTypes} from 'react';
import Autobind from 'autobind-decorator';
//import ClassNames from 'classnames';

import './counter.scss';

@Autobind
export default class Counter extends React.Component {

  static propTypes = {
    // 替代原propTypes 属性,注意前面有static,属于静态方法.
    value: PropTypes.number.isRequired,
    onIncrement: PropTypes.func.isRequired,
    onAsyncIncrement: PropTypes.func.isRequired,
    onDecrement: PropTypes.func.isRequired,
    onAsyncDecrement: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props)
  }

  render() {
    const {value, onIncrement, onAsyncIncrement, onDecrement, onAsyncDecrement} = this.props
    return (
      <p>
        Clicked: {value} times
        <button onClick={onIncrement} className="btn"> + </button>
        <button onClick={onAsyncIncrement} className="btn"> + (async) </button>
        <button onClick={onDecrement} className="btn"> - </button>
        <button onClick={onAsyncDecrement} className="btn"> - (async)</button>
      </p>
    )
  }
}

