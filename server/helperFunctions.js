const axios = require("axios");
// const { GOOGLEPLACES_API_KEY } = require("../config.js");

const GOOGLEPLACES_API_KEY = process.env.GOOGLEPLACES_API_KEY;

module.exports = {
  // query Google API for points of interest for a particular country
  getPointsOfInterest: (country, cb) => {
    const countryWords = country.split(" ");
    if (countryWords.length > 1) {
      countryWords.forEach((word, index) => {
        if (word === "&") {
          countryWords[index] = "and";
        }
      });
      country = countryWords.join("+");
      console.log("querying this country:", country);
    }
    let queryStr = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${country}+points+of+interest&language=en&key=${GOOGLEPLACES_API_KEY}`;
    axios.get(queryStr).then(data => cb(null, data.data.results));
  }
};
