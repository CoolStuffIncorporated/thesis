const express = require("express");
// const fs = require("fs");
// const http = require('http');
// const https = require('https');
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const compression = require("compression");
const logger = require("morgan");
const cors = require("cors");
let { getPointsOfInterest } = require("./helperFunctions");

const {
  log,
  chalkSuccess,
  chalkError,
  chalkWarning,
  chalkInfo
} = require("../chalkpresets");

const port = process.env.port || 3000;

const app = express();

// Apply middleware
app.use(bodyParser.json());
app.use(cookieParser());
app.use(compression());
app.use(logger("dev"));
app.use(cors());
// app.use(express.static(path.join(__dirname, "../dist/")));
app.use(express.static("dist"));

app.post("/getPointsOfInterest", (req, res) => {
  console.log('hello');
  getPointsOfInterest(req.body.country, (err, data) => {
    if (err) {
      console.log("error getting points of interest", err);
    } else {
      res.send(data);
    }
  });
});

app.listen(port, () => {
  log(chalkSuccess(`Port ${port} is lit fam 🔥 🔥 🔥`));
});
