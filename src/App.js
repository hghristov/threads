import React, { Component } from 'react';
import Thread from './components/Thread/Thread';

export default class App extends Component {
  state = {
    threads: null
  }

  componentDidMount() {
    const dataUrl = 'http://localhost:3001/threads';

    fetch(dataUrl)
      .then(response => response.json())
      .then(data => {
        this.setState({ threads: data });
      })
  }

  render() {
    return (
      <>
        {
          this.state.threads ? (
            this.state.threads.map((thread, i) => {
              return (
                <Thread data={thread} key={i} />
              )
            })
          ) : null
        }
      </>
    )
  }
}
