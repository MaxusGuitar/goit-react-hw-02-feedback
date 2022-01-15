import React, { Component } from "react";
import FeedbackOptions from "./FeedbackOptions";
import Statistics from "./Statistics";

class Counter extends Component {
  state = {
    goodValue: this.props.good,
    neutralValue: this.props.neutral,
    badValue: this.props.bad,
    visible: false,
  }; // вместо конструктора

  Show = () => {
    this.setState({ visible: true });
  };

  Hide = () => {
    this.setState({ visible: false });
  };

  Good = () => {
    this.setState((prewState) => {
      return {
        goodValue: prewState.goodValue + 1,
      };
    });
  };

  Neutral = () => {
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
        <h1>Please leave feedback</h1>
        <FeedbackOptions
          onGood={this.Good}
          onNeutral={this.Neutral}
          onBad={this.Bad}
          onHide={this.Hide}
          onShow={this.Show}
        />
        <h1>Statistics</h1>
        <Statistics
          onGoodValue={this.state.goodValue}
          onNeutralValue={this.state.neutralValue}
          onBadValue={this.state.badValue}
        />
      </div>
    );
  }
}

export default Counter;
