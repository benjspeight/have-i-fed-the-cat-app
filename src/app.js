// In src/app.js add this code:
const express = require("express");

const app = express();

// we expect to have to parse json from request bodies,
// so we need the JSON middleware
app.use(express.json());

// we will put our routes and controller functions here

module.exports = app;
