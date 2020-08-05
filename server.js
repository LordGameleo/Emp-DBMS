const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
var morgan = require("morgan");
var winston = require("./src/app/config/winston");

const app = express();

app.options('*', cors());
app.use(morgan('dev'));
app.use(morgan('combined', { stream: winston.stream }));
// Allowing X-domain request
var allowCrossDomain = function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Cache-Control");

  // intercept OPTIONS method
  if ('OPTIONS' == req.method) {
    res.send(200);
  }
  else {
    next();
  }
};

app.use(allowCrossDomain);

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));


const db = require("./src/app/models");
db.sequelize.sync();
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });



require("./src/app/routes/empdbms.routes")(app);
  
// set port, listen for requests
const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
