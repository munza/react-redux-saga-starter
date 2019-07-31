import React from 'react';

class Counter extends React.Component {
  state = {
    count: 0
  };

  handleIncrement() {
    this.setState({ count: this.state.count + 1 });
  }

  handleDecrement() {
    this.setState({
      count: this.state.count > 0 ? this.state.count - 1 : this.state.count
    });
  }

  render() {
    return (
      <div>
        <h2>Counter</h2>
        <p>{this.state.count}</p>
        <button onClick={() => this.handleDecrement()}>-</button>
        <button onClick={() => this.handleIncrement()}>+</button>
      </div>
    );
  }
}

export default Counter;
