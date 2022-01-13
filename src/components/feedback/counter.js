import React, { Component } from "react";

class Counter extends Component {
  state = {
    goodValue: this.props.good,
    neutralValue: this.props.neutral,
    badValue: this.props.bad,
  }; // вместо конструктора

  Good = () => {
    this.setState((prewState) => {
      return {
        goodValue: prewState.goodValue + 1,
      };
    });
  };

  Normal = () => {
    this.setState((prewState) => {
      return {
        neutralValue: prewState.neutralValue + 1,
      };
    });
  };

  Bad = () => {
    this.setState((prewState) => {
      return {
        badValue: prewState.badValue + 1,
      };
    });
  };

  render() {
    return (
      <div>
        <span>{this.state.goodValue}</span>
        <button type="button" onClick={this.Good}>
          GOOD
        </button>
        <span>{this.state.neutralValue}</span>
        <button type="button" onClick={this.Normal}>
          NORMAL
        </button>
        <span>{this.state.badValue}</span>
        <button type="button" onClick={this.Bad}>
          BAD
        </button>
      </div>
    );
  }
}

export default Counter;
