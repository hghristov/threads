import React from 'react'
import classes from './Message.module.scss'

const message = (props) => {
    return (
        <div className={classes.Message}>
            <h2 className={classes.Subject}>{props.data.subject}</h2>
        </div>
    )
}

export default message;
