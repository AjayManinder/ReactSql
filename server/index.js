const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const userRoute = require("./users");

const app = express();

app.use(cors());

app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(
  bodyParser.urlencoded({
    // to support URL-encoded bodies
    extended: true,
  })
);

app.use("/api", userRoute);

app.listen(5555, function () {
  console.log("Node server running on port : 5555");
});
// error
app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};
  res.status(err.status || 500);
  res.json("error");
});

module.exports = app;
