import React from "react";
import PropTypes from "prop-types";
import LocationStatsContainer from "../../containers/LocationStatsContainer";
import LocationBasicInfoContainer from "../../containers/LocationBasicInfoContainer";
import PointsOfInterestContainer from "../../containers/PointsOfInterestContainer";

const LocationProfile = ({
  location,
  userId,
  addVisitedDestination,
  addFaveDestination
}) => {
  return (
    <div className="location-profile">
      <h1>{location}</h1>

      <LocationStatsContainer />

      <div className="add-location-options">
        <button
          type="submit"
          onClick={() => addVisitedDestination(userId, location)}
        >
          I've Been Here
        </button>
        <button
          type="submit"
          onClick={() => addFaveDestination(userId, location)}
        >
          I Want To Go Here!
        </button>
      </div>

      <LocationBasicInfoContainer />

      <PointsOfInterestContainer />

      {/* <div>
        <h2>Fun Facts About {location}:</h2>
        <ul>
          {this.state.funFacts.map((fact, ind) => (
            <li key={ind}>{fact}</li>
          ))}
        </ul>
      </div> */}
    </div> // close country-page div
  );
};

LocationProfile.propTypes = {
  location: PropTypes.string.isRequired,
  userId: PropTypes.number.isRequired,
  addVisitedDestination: PropTypes.func.isRequired,
  addFaveDestination: PropTypes.func.isRequired
};

export default LocationProfile;
