import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { LOCATION_PROFILE } from "../constants";

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      field: ""
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = e => {
    e.preventDefault();
    this.setState({ field: e.target.value });
  };

  render() {
    const {
      setHeader,
      changeSelectedLocation,
      getLocationBasicInfo,
      getPointsOfInterest,
      getAttractions,
      getVisitedCount,
      getFaveCount
    } = this.props;
    const { field } = this.state;
    return (
      <form>
        <TextField
          id="search"
          label="Search a country"
          type="search"
          margin="normal"
          onChange={e => {
            this.handleChange(e);
          }}
        />
        <br />
        <Link to="/search">
          <center>
            <Button
              label="Search"
              type="submit"
              variant="raised"
              color="primary"
              onClick={() => {
                setHeader(LOCATION_PROFILE);
                changeSelectedLocation(field);
                getLocationBasicInfo(field);
                getPointsOfInterest(field);
                getAttractions(field);
                getVisitedCount(field);
                getFaveCount(field);
              }}
            >
              Search
            </Button>
          </center>
        </Link>
      </form>
    );
  }
}

Search.propTypes = {
  setHeader: PropTypes.func.isRequired,
  changeSelectedLocation: PropTypes.func.isRequired,
  getLocationBasicInfo: PropTypes.func.isRequired,
  getPointsOfInterest: PropTypes.func.isRequired,
  getAttractions: PropTypes.func.isRequired,
  getVisitedCount: PropTypes.func.isRequired,
  getFaveCount: PropTypes.func.isRequired
};

export default Search;
