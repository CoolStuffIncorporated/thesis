import React from "react";
import PropTypes from "prop-types";

const LocationStats = ({ visitedCount = 0, faveCount = 0 }) => {
  return (
    <div className="location-stats">
      <p>[{visitedCount}] Wanderers have visited here.</p>
      <p>[{faveCount}] Wanderers want to visit here.</p>
    </div>
  );
};

LocationStats.propTypes = {
  visitedCount: PropTypes.number.isRequired,
  faveCount: PropTypes.number.isRequired
};

export default LocationStats;
