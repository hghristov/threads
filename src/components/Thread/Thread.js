import React, { Component } from 'react'

export default class Thread extends Component {
    render() {
        return (
            <div>
                {console.log(this.props.data)}
            </div>
        )
    }
}
