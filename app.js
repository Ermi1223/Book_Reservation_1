const express = require('express');
const app = express();

// Your routes and middleware go here
app.get('/', (req, res) => {
  res.status(200).send('Hello World');
});

// Don't start the server in this file, only export the app
// This prevents issues with logging and makes testing easier
module.exports = app;
