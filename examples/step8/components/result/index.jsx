import React, {Component} from 'react'
import './index.scss'

export default class Result extends Component {
    render () {
        return (
            <div>
                <h3>calcState= {this.props.calcState}</h3>
                <h3>calcState= {this.props.concatState}</h3>
            </div>
        )
    }
}
