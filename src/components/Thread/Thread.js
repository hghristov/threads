import React, { Component } from 'react';
import Message from './Message/Message';

import classes from './Thread.module.scss';

export default class Thread extends Component {
    state = {
        messages: null,
        isCollapsed: false
    }

    componentDidMount() {
        this.setState(
            { messages: this.props.data },
            () => {
                if (this.state.messages.length > 1) {
                    this.setState({ isCollapsed: true });
                }
            }
        );
    }

    clickHandler = (e) => {
        if (this.state.isCollapsed) {
            this.setState({ isCollapsed: false });
        }
    }

    render() {
        return (
            <>
                {
                    this.state.messages ? (
                        <article className={`${classes.Thread} ${this.state.isCollapsed ? 'Thread--isCollapsed' : 'Thread--isExpanded'}`} onClick={this.clickHandler}>
                            { this.state.isCollapsed ? (
                                <span className={`${classes.MessageCount} ${this.state.messages[0].score > 5 ? classes.MessageCountHigh : classes.MessageCountLow}`}>
                                    {this.state.messages.length} messages
                                </span>
                            ) : null }

                            { this.state.messages.map((message, i) => {
                                return (
                                    <Message data={message} key={message.id} i={i} collapsed={this.state.isCollapsed} />
                                )
                            }) }
                        </article>
                    ) : null
                }
            </>
        )
    }
}
