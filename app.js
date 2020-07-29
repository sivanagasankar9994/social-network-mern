const express = require("express");
const morgan = require("morgan");
const bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
const expressValidator = require("express-validator");
var cors = require("cors");
const fs = require('fs');
const post = require("./routes/post");
const auth = require("./routes/auth");
const user = require("./routes/users");
const app = express();

// 1) MIDDLEWARES
// if (process.env.NODE_ENV === "development") {
app.use(morgan("dev"));
// }
app.use(expressValidator());
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.json());
app.use(express.static(`${__dirname}/public`));

app.use((req, res, next) => {
  console.log("Hello from the middleware 👋");
  next();
});

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});
app.use(cors());

// apiDocs
app.get("/api", (req, res) => {
  fs.readFile("docs/apiDocs.json", (err, data) => {
    if (err) {
      res.status(400).json({
        error: err,
      });
    }
    const docs = JSON.parse(data);
    res.json(docs);
  });
});

// 3) ROUTES
app.use("/api/v1/post", post);
app.use("/api/v1/auth", auth);
app.use("/api/v1/user", user);

app.use(function (err, req, res, next) {
  if (err.name === "UnauthorizedError") {
    res.status(401).json({ error: "Unauthorized!" });
  }
});




module.exports = app;
