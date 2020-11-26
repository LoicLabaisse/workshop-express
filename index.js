const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 3001;
const components = require("./components");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/api", components);

app.listen(port, (err) => {
  if (err) {
    throw err;
  }
  console.log("it's working");
});
