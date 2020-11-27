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
                            <span>Messages: {this.state.messages.length}</span>

                            { this.state.messages.map((message, i) => {
                                console.log(message);
                                return (
                                    <Message data={message} key={message.id} />
                                )
                            }) }
                        </>
                    ) : null
                }

                end thread
            </article>
        )
    }
}
