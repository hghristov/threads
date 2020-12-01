import React, { Component } from 'react';
import Message from './Message/Message';

import classes from './Thread.module.scss'; // scoped styles
import './Thread.scss'; // unscoped styles

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

    setBadgeClassModifiers = () => {
        console.log(this.state.messages[0].score);
        if (this.state.messages[0].score > 5) {
            return 'MessageCountRatingHigh';
        } else {
            return 'MessageCountRatingLow';
        }
    }

    setThreadClassModifiers = () => {
        if (this.state.isCollapsed) {
            return 'Thread--isCollapsed';
        } else {
            return 'Thread--isExpanded';
        }
    }

    render() {
        return (
            <>
                {
                    this.state.messages ? (
                        <article className={`${classes.Thread} ${this.setThreadClassModifiers()}`} onClick={this.clickHandler}>
                            { this.state.isCollapsed ? (
                                <span className={`${classes.MessageCount} ${this.setBadgeClassModifiers()}`}>
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
