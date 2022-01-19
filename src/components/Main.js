import React, { Component } from "react";
import FeedbackOptions from "./FeedbackOptions";
import Statistics from "./Statistics";
import Notification from "./Notification";
import style from "./main.module.css";

class Main extends Component {
  state = {
    goodValue: this.props.good,
    neutralValue: this.props.neutral,
    badValue: this.props.bad,
    visible: false,
  }; // вместо конструктора

  onLeaveFeedback = (a) => {
    switch (a) {
      case "good":
        this.setState((prewState) => {
          return {
            goodValue: prewState.goodValue + 1,
            visible: true,
          };
        });
        break;
      case "neutral":
        this.setState((prewState) => {
          return {
            neutralValue: prewState.neutralValue + 1,
            visible: true,
          };
        });
        break;
      case "bad":
        this.setState((prewState) => {
          return {
            badValue: prewState.badValue + 1,
            visible: true,
          };
        });
        break;
      default:
        break;
    }
  };

  countTotalFeedback = () => {
    return this.state.goodValue + this.state.neutralValue + this.state.badValue;
  };

  countPositiveFeedbackPercentage = () => {
    return this.countTotalFeedback()
      ? Math.round((this.state.goodValue * 100) / this.countTotalFeedback())
      : 0;
  };

  render() {
    return (
      <div>
        <h1>Please leave feedback</h1>
        <FeedbackOptions
          options={["good", "neutral", "bad"]}
          onLeaveFeedback={this.onLeaveFeedback}
        />
        <h1>Statistics</h1>
        {this.onLeaveFeedback === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          this.state.visible && (
            <Statistics
              onGoodValue={this.state.goodValue}
              onNeutralValue={this.state.neutralValue}
              onBadValue={this.state.badValue}
              total={this.countTotalFeedback()}
              positive={this.countPositiveFeedbackPercentage()}
            />
          )
        )}
      </div>
    );
  }
}

export default Main;
