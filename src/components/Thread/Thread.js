import React, { Component } from 'react'

import classes from './Thread.module.scss';

export default class Thread extends Component {
    render() {
        return (
            <article className={classes.Thread}>
                thread
                {console.log(this.props.data)}
            </article>
        )
    }
}
