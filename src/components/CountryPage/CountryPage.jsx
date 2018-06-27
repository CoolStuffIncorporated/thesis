import React from "react";
import axios from "axios";

class CountryPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      country: props.country, // current country displayed on page
      pointsOfInterest: [],
      funFacts: ["fun fact 1", "fun fact 2", "fun fact 3"]
    };
    this.getPointsOfInterest = this.getPointsOfInterest.bind(this);
  }

  componentDidMount() {
    this.props.setNavFlagToCountryorCity()
    this.getPointsOfInterest();
  }

  getPointsOfInterest() {
    console.log('country is', this.state.country);
    axios
      .post("/getPointsOfInterest", { country: this.state.country })
      .then(data => this.setState({ pointsOfInterest: data.data }))
      .catch(err => console.log("error getting points of interest:", err));
  }

  render() {
    return (
      <div className="country-page">
        <div className="main">
          <h1>{this.state.country}</h1>

          <div>
            <p>XXX Wanderers have visited this country.</p>
            <p>XXX Wanderers want to visit this country.</p>
          </div>

          <div className="country-info">
            <h2>Blurb about the country goes here:</h2>
            <p>Population size: </p>
            <p>Language: </p>
            <p>Currency: </p>
            <p>Flag: </p>
          </div>

          <div className="points-of-interest-section">
            <h2>Top Places To Visit In This Country:</h2>
              {this.state.pointsOfInterest.map((place, ind) => (
                <div className="point-of-interest" key={ind}>
                  <img src={place.icon} />
                  <h3>{place.name}</h3>
                  <p>Address: {place.formatted_address}</p>
                  <p>Rating: {place.rating}</p>
                </div>
              ))}
          </div>

          <div>
            <h2>Fun Facts About This Country:</h2>
            <ul>
              {this.state.funFacts.map((fact, ind) => (
                <li key={ind}>{fact}</li>
              ))}
            </ul>
          </div>
        </div>
      </div> // close country-page div
    );
  }
}

export default CountryPage;
