//requires the express package and assigns to the express variable
const express = require('express');
const morgan = require('morgan');

//the express package exports a function. when you invoke that function you get a new Express application and assign it to a variable
const app = express();

//app-level middleware
app.use(morgan('dev'));



//router middleware 
const checkForAbbreviationLength = (req, res, next) => {
  const abbreviation = req.params.abbreviation;
  if (abbreviation.length !== 2) {
    next(`State abbreviation "${abbreviation}" is invalid.`);
  } else {
    next();
  }
};

//routes
app.get(
  "/states/:abbreviation",
  checkForAbbreviationLength,
  (req, res, next) => {
    res.send(`${req.params.abbreviation} is a nice state, I'd like to visit.`);
  }
);

app.get(
  "/travel/:abbreviation",
  checkForAbbreviationLength,
  (req, res, next) => {
    res.send(`Enjoy your trip to ${req.params.abbreviation}!`);
  }
);



//custom error handler
app.use((req, res, next) => {
    res.send(`The route ${req.path} does not exist!`);
});

//express error handler
app.use((err, req, res, next) => {
    console.log(err);
    res.send(err);
});
 


//export the express app to be used in the server.js file
module.exports = app;

