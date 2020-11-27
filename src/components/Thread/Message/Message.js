import React from 'react'
import classes from './Message.module.scss'

const message = (props) => {
    return (
        <div className={classes.Message}>
            <div className={classes.MessageContent}>
                <h2 className={`${classes.Subject} ${props.data.score > 5 ? classes.SubjectRatingHigh : classes.SubjectRatingLow}`}>
                    {props.data.subject}
                </h2>

                <small className={classes.MessageQuestion}>{props.data.question}</small>
                <p className={classes.MessageText}>{props.data.text}</p>
            </div>

            <div className={classes.MessageMeta}>
                <p className={classes.TeamName}>{props.data.team}</p>
                <time className={classes.MessageDate} datetime="">{props.data.created_at}</time>
            </div>
        </div>
    )
}

export default message;
