const db = require("../db");

const Media = {};

Media.retrieveMediaByUserId = (userId, location) => {
  console.log("media location", location);

  if (location) {
    return db("media")
      .whereIn("user_id", userId)
      .where("country_id", location[0].country_id)
      .select("*")
      .then(media => media)
      .catch(err => console.error(err));
  } else {
    return db("media")
      .whereIn("user_id", userId)
      .select("*")
      .then(media => {
        return media;
      })
      .catch(err => console.error(err));
  }
};

module.exports = Media;
