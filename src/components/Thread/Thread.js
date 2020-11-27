import React, { Component } from 'react'
import Message from './Message/Message';

import classes from './Thread.module.scss';

export default class Thread extends Component {
    state = {
        messages: null
    }

    componentDidMount() {
        this.setState({ messages: this.props.data });
    }

    render() {
        return (
            <article className={classes.Thread}>
                {
                    this.state.messages ? (
                        <>
                            { this.state.messages.length > 1 ? (
                                <span className={`${classes.MessageCount} ${this.state.messages[0].score > 5 ? classes.MessageCountHigh : classes.MessageCountLow}`}>{this.state.messages.length} messages</span>
                            ) : null }

                            { this.state.messages.map((message, i) => {
                                // console.log(message);
                                return (
                                    <Message data={message} key={message.id} />
                                )
                            }) }
                        </>
                    ) : null
                }
            </article>
        )
    }
}
