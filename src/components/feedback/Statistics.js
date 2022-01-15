import React from "react";

const Statistics = ({ onGoodValue, onNeutralValue, onBadValue }) => (
  <div>
    <p>
      Good:
      <span>{onGoodValue}</span>
    </p>
    <p>
      Neutral:
      <span>{onNeutralValue}</span>
    </p>
    <p>
      Bad:
      <span>{onBadValue}</span>
    </p>
  </div>
);

export default Statistics;
