const express = require("express");
const router = express.Router();

const people = require("./people");

router.use("/people", people);

module.exports = router;
