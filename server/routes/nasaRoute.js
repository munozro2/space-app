const express = require('express');
const axios = require('axios');
const keys = require('../config/keys');
const router = express.Router();

router.get('/POTD', (req, res) => {
  axios
    .get(`https://api.nasa.gov/planetary/apod?api_key=${keys.NASA_KEY}`)
    .then((response) => {
      console.log(response.data);
      const info = response.data;
      res.send(info);
    })
    .catch((error) => {
      console.log(error);
    });
});

router.get('/mars', (req, res) => {
  axios
    .get(
      `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${keys.NASA_KEY}`
    )
    .then((response) => {
      const info = response.data;
      res.send(info);
    });
});

router.get('/mars/weather', (req, res) => {
  axios
    .get(
      `https://api.nasa.gov/insight_weather/?api_key=${keys.NASA_KEY}&feedtype=json&ver=1.0`
    )
    .then((response) => {
      const info = response.data;
      res.send(info);
    });
});

module.exports = router;
