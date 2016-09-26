import React, {PropTypes} from 'react';
import Autobind from 'autobind-decorator';
//import ClassNames from 'classnames';

import './counter.scss';

@Autobind
export default class Counter extends React.Component {

  static propTypes = {
    // 替代原propTypes 属性,注意前面有static,属于静态方法.
    //value: PropTypes.number.isRequired,
    onIncrement: PropTypes.func.isRequired,
    onDecrement: PropTypes.func.isRequired,
    onConcat: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props)
  }

  render() {
    const { value, onIncrement, onDecrement, onConcat } = this.props;
    return (
      <div>
        <h3>concatState= {value.concatState}</h3>
        <h3>calcState= {value.calcState}</h3>
        <button onClick={onIncrement} className="btn"> + </button>
        <button onClick={onDecrement} className="btn"> - </button>
        <button onClick={onConcat} className="btn"> concat </button>
      </div>
    )
  }
}


