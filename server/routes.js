const router = require("express").Router();
const axios = require("axios");
const User = require("./Models/user");
const Destinations = require("./Models/destinations");
const {
  getPointsOfInterest,
  getAttractions,
  getLocationBasicInfo
} = require("./helperFunctions");
// const Tag = require("./Models/tag");
// const Blog = require("./Models/blog");
// const BlogTag = require("./Models/blogtag");

const ec2path = "http://ec2-52-91-143-214.compute-1.amazonaws.com:3000";

const {
  log,
  chalkSuccess,
  chalkError,
  chalkWarning,
  chalkInfo
} = require("../chalkpresets");

// call the helper function to query Google Places API for points of interest for given location
router.post("/getPointsOfInterest", (req, res) => {
  getPointsOfInterest(req.body.location, (err, data) => {
    if (err) {
      console.log("error getting points of interest from server", err);
    } else {
      res.send(data);
    }
  });
});

// call the helper function to query Atlas Obscura for attractions for given location
router.post("/getAttractions", (req, res) => {
  getAttractions(req.body.location, data => {
    res.send(data);
  });
});

// call the helper function to query REST Countries API for basic info for given location
router.post("/getLocationBasicInfo", (req, res) => {
  getLocationBasicInfo(req.body.location, data => {
    if (data) res.send(data);
  });
});

// User.retrieveUserByUserId
router.get("/favorites", (req, res) => {
  Destinations.retrieveFavByUserId(req.query.userId, countries => {
    // console.log('favorite countries', countries)
    res.status(200).send(countries);
  });
});

router.get("/visited", (req, res) => {
  Destinations.retrieveVisitedByUserId(req.query.userId, countries => {
    // console.log('visited countries', countries)
    res.status(200).send(countries);
  }).catch(err => {
    console.error(err);
    res.status(404).send("Unable to retrieve visited destinations");
  });
});

router.post("/favorites", (req, res) => {
  console.log('2. hit server post route to fav:', req.body.country);
  Destinations.addFavByUserId(req.body.userId, req.body.country);
});

router.post("/visited", (req, res) => {
  console.log('2. hit server post route to visited:', req.body);
  Destinations.addVisitedByUserId(req.body.userId, req.body.country);
});

router.get("/friends", (req, res) => {
  // console.log('*******',req.query)
  User.retrieveFriendsByUserId(req.query.userId, friends => {
    // console.log("friends", friends)
    res.status(200).send(friends);
  }).catch(err => console.error(err));
});

router.get("/userInfo", async (req, res, next) => {
  console.log(req.params);
  try {
    const userInfo = await User.findByUserId(req.query.user_id);
    res.status(200).send(userInfo);
  } catch (err) {
    console.error(err);
    res.status(404).send("Unable /#/to retrieve user info");
  }
});

// addBlog
router.post("/blogs", async (req, res, next) => {
  try {
    const newBlog = await Blog.addNewBlog(req.body);
    res.status(200).send(newBlog);
  } catch (err) {
    console.error(err);
    res.status(404).send("Unable to add new blog");
  }
});

// retrieveAllBlogs
router.get("/blogs", async (req, res, next) => {
  try {
    const blogs = await Blog.retrieveAllBlogs();
    res.status(200).send(blogs);
  } catch (err) {
    console.error(err);
    res.status(404).send("Unable to retrieve blogs");
  }
});

// Destinations.User(req.query)

// Blog.retrieveBlogsByUserId
router.get("/blogsByUserId", async (req, res, next) => {
  try {
    const blogs = await Blog.retrieveBlogsByUserId(req.query.user_id);
    res.status(200).send(blogs);
  } catch (err) {
    console.error(err);
    res.status(404).send("Unable to retrieve user's blogs");
  }
});

// Blog.retrieveBlogByBlogId
// used for looking up blogs and tags
router.get("/blogsByBlogId", async (req, res, next) => {
  try {
    /#/;
    const blog = Blog.retrieveBlogsByBlogId(req.query.blog_id);
    res.status(200).send(blog);
  } catch (err) {
    console.error(err);
    res.status(404).send("Unable to retrieve blog");
  }
});

// Tag.addTag - add check for whether tag already exists
router.post("/tags", async (req, res, next) => {
  try {
    const newTag = await Tag.createNewTag(req.body.name);
    res.status(200).send(newTag);
  } catch (err) {
    console.error(err);
    res.status(404).send("Unable to create new tag");
  }
});

// get individual tag
// tag_id not yet implemented on front-end
router.get("/getTag", async (req, res, next) => {
  try {
    const tag = await Tag.findByTagId(req.query.tag_id);
    res.status(200).send(tag);
  } catch (err) {
    console.error(err);
    res.status(404).send("Unable to locate tag");
  }
});

router.get("/tags", async (req, res, next) => {
  try {
    const tags = await Tag.retrieveAllTags();
    res.status(200).send(tags);
  } catch (err) {
    console.error(err);
    res.status(404).send("Unable to retrieve tags");
  }
});

router.post("/create", (req, res) => {
  const file = req.files.file;
  const userId = req.body.user_id;
  axios
    .post(`${ec2path}/create`, {
      file
    })
    .then(imageinfo => {
      User.addProfilePhotoByUserId(imageinfo.data, userId).then(
        res.sendStatus(200)
      );
    });
});

router.get("/retrieve", (req, res) => {
  const userId = req.query.userId;
  User.retrieveProfilePhotoByUserId(userId, userInfo => {
    axios
      .get(`${ec2path}/retrieve`, {
        params: {
          eTag: userInfo[0].etag,
          key: userInfo[0].image_key
        }
      })
      .then(photo => {
        console.log('success retrieve', photo.data)
        res.send(photo.data);
      })
      .catch(err => {
        console.error(err);
        res.sendStatus(404);
      });
  });
});

module.exports = router;
