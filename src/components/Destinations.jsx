import React from "react";
import PropTypes from "prop-types";
import lifecycle from "react-pure-lifecycle";

const methods = {
  componentDidMount({ getFaveDestinations, getVisitedDestinations, userId }) {
    getFaveDestinations(userId);
    getVisitedDestinations(userId);
  }
};

const Destinations = ({ visitedDestinations, faveDestinations }) => {
  // console.log("visited and fave dest:", visitedDestinations, faveDestinations);
  return (
    <div className="destinations">
      <h1>Destinations</h1>
      <div className="visited-destinations">
        <h2>Places I've Been:</h2>
        {visitedDestinations.map(visited => {
          return (
            <div key={visited.country_id}>
              <p>☑ {visited.country}</p>
            </div>
          );
        })}
      </div>

      <div className="fave-destinations">
        <h2>Places I Want To Visit:</h2>
        {faveDestinations.map(fave => {
          return (
            <div key={fave.country_id}>
              <p>☐ {fave.country}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

Destinations.propTypes = {
  visitedDestinations: PropTypes.arrayOf(PropTypes.object).isRequired,
  faveDestinations: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default lifecycle(methods)(Destinations);
