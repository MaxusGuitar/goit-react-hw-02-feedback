import React from "react";

const FeedbackOptions = ({ onHide, onGood, onNeutral, onBad }) => (
  <div>
    <button type="button" onClick={onGood}>
      GOOD
    </button>
    <button type="button" onClick={onNeutral}>
      NORMAL
    </button>
    <button type="button" onClick={onBad}>
      BAD
    </button>
  </div>
);

export default FeedbackOptions;
