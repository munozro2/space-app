const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const passport = require('passport');


const users = require("./routes/authRoutes");
const nasa = require('./routes/nasaRoute');

mongoose.connect(keys.mongoURI);

const app = express();

//bodyparser middleware
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

//for passport middleware
app.use(passport.initialize());

//passport config
require('./config/passport');

//routes
app.use('/api/users', users);
app.use('/api/nasa', nasa);


const PORT = process.env.PORT || 5000;
app.listen(PORT);