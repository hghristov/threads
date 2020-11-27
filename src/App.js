import React, { Component } from 'react'

export default class App extends Component {
  state = {
    threads: null
  }

  componentDidMount() {
    const dataUrl = 'http://localhost:3001/threads';

    fetch(dataUrl)
      .then(response => response.json())
      .then(data => {
        console.log(data);
      })
  }

  render() {
    return (
      <div>
        
      </div>
    )
  }
}
