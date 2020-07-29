const dotenv = require("dotenv");
dotenv.config();
const app = require("./app");
const mongoose = require("mongoose");

// Port
const port = process.env.PORT || 8000;

// databse connection

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log("DB connection successful!"))
  .catch((err) => {
    console.log("Error while connecting db", err);
  });

//   server added
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
