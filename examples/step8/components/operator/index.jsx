import React, {Component} from 'react'
import './index.scss'

export default class Operator extends Component {
    render () {
      return (
        <div>
            <button className="btn" onClick={() => {
              this.props.actions.incActionCreator(3);
            }}>
              +
            </button>
            <button className="btn" onClick={() => {
              this.props.actions.decActionCreator(2);
            }}>
              -
            </button>
            <button className="btn" onClick={() => {
              this.props.actions.concatActionCreator(4);
            }}>
              +(concat)
            </button>
        </div>
      )
    }
}
