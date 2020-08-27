const express = require('express');
const app     = express();
const morgan = require('morgan');
const bodyParser = require("body-parser");
const mongoose = require("mongoose");


const casesRoutes = require('./api/routes/cases');

mongoose.connect(
    "mongodb+srv://node-rest-covid-19:" +
      process.env.MONGO_ATLAS_PW +
      "@node-rest-covid-19.ip6ps.mongodb.net/node-rest-covid-19?retryWrites=true&w=majority",
    {
        useUnifiedTopology: true,
        useNewUrlParser: true
    }
  );

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
  });
  

// Routes which should handle requests
app.use('/cases',casesRoutes);

app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
})

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

module.exports = app;