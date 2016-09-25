import React, { Component, PropTypes } from 'react'

class Counter extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { onIncrement, onDecrement, onConcat } = this.props
    return (
      <p>
        {' '}
        <button onClick={onIncrement}>
          +
        </button>
        {' '}
        <button onClick={onDecrement}>
          -
        </button>
        {' '}
        <button onClick={onConcat}>
          +(concat)
        </button>
      </p>
    )
  }
}

Counter.propTypes = {
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
  onConcat: PropTypes.func.isRequired
}

export default Counter
