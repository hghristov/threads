import React, { Component } from 'react';
import Thread from './components/Thread/Thread';

import 'normalize.css';
import classes from './App.module.scss'; // scoped styles
import './App.scss'; // unscoped styles

export default class App extends Component {
    state = {
        threads: null,
        failed: false
    }

    componentDidMount() {
        const dataUrl = 'http://localhost:3001/threads';

        fetch(dataUrl)
            .then(response => response.json())
            .then(data => {
                this.setState({ threads: data });
            })
            .catch((error) => {
                this.setState({ failed: true });
                console.log(error);
            });
    }

    render() {
        return (
            <div className={classes.Container}>
                {
                    this.state.threads && this.state.threads.length ? (
                        this.state.threads.filter(thread => thread.length > 1).sort((a, b) => {
                            return a[0].subject > b[0].subject ? 1 : -1;
                        }).map((thread, i) => {
                            return (
                            <Thread data={thread} key={thread[0].thread_id} />
                            )
                        })
                    ) : this.state.failed ? (
                        <p className="text-center">Failed to load data.</p>
                    ) : (
                        <p className="text-center">Loading...</p>
                    )
                }
            </div>
        )
    }
}
