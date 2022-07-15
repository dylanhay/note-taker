//imports
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

//grabs data from json file
const { notes } = require("./db/db.json");
const express = require("express");
const fs = require("fs");
const path = require("path");

const PORT = process.env.PORT || 3001;
//instantiate the server
const app = express();

app.use(express.static("public"));
// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

//server listening
app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});