import React from 'react'
import classes from './Message.module.scss'

const message = (props) => {
    const getDate = (date) => {
        const parsedDate = new Date(date),
              monthNames = [
                  'Jan',
                  'Feb',
                  'Mar',
                  'Apr',
                  'May',
                  'Jun',
                  'Jul',
                  'Aug',
                  'Sep',
                  'Oct',
                  'Nov',
                  'Dec'
              ];

        let day   = parsedDate.getDate(),
            month = parsedDate.getMonth();

        day = day % 10 === 1 && day !== 11 ? day + 'st' :
              day % 10 === 2 ? day + 'nd' :
              day % 10 === 3 ? day + 'rd' :
              day + 'th';

        return `${monthNames[month]} ${day}`;
    }

    return (
        <div className={classes.Message}>
            <div className={classes.MessageContent}>
                { props.data.subject ? (
                    <h2 className={`${classes.Subject} ${props.data.score > 5 ? classes.SubjectRatingHigh : classes.SubjectRatingLow}`}>
                        {props.data.subject}
                    </h2>
                ) : (
                    <h2 className={classes.Subject}>No subject</h2>
                ) }

                { props.data.question ? (
                    <small className={classes.MessageQuestion}>{props.data.question}</small>
                ) : null }

                { props.data.text ? (
                    <p className={classes.MessageText}>{props.data.text}</p>
                ) : null }
            </div>

            <div className={classes.MessageMeta}>
                <p className={classes.TeamName}>{props.data.team}</p>
                {/* <time className={classes.MessageDate} datetime="">{props.data.created_at}</time> */}
                <time className={classes.MessageDate}>{getDate(props.data.created_at)}</time>
            </div>
        </div>
    )
}

export default message;
