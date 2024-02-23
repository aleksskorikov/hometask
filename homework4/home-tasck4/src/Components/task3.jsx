import React, { Component } from 'react'

export default class task3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  };

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.count <= 3;
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      console.log(this.state.count);
      
      }
  };

    incrementCount = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  render() {
    return (
      <>
        <p>Поточне число: {this.state.count}</p>
        <button onClick={this.incrementCount}>Збільшити</button>
      </>

    )
  }
}

