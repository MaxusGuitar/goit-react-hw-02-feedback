import React from "react";
import PropTypes from "prop-types";

const Statistics = ({
  onGoodValue,
  onNeutralValue,
  onBadValue,
  total,
  positive,
}) => (
  <div>
    <ul>
      <li>Good:{onGoodValue}</li>
      <li>Neutral:{onNeutralValue}</li>
      <li>Bad:{onBadValue}</li>
      <li>Total:{total}</li>
      <li>Positive feedback:{positive}%</li>
    </ul>
  </div>
);

Statistics.propTypes = {
  onGoodValue: PropTypes.number,
  onNeutralValue: PropTypes.number,
  onBadValue: PropTypes.number,
  total: PropTypes.number,
  positive: PropTypes.number,
};

export default Statistics;
