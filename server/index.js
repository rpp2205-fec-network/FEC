require("dotenv").config();
const { default: axios } = require("axios");
const express = require("express");
const path = require("path");
const API_KEY = require("../client/src/config/config.js");
// const sessionHandler = require("./middleware/session-handler");
// const logger = require("./middleware/logger");

const app = express();

// Adds `req.session_id` based on the incoming cookie value.
// Generates a new session if one does not exist.
//app.use(sessionHandler);

// Needed to receive json data
app.use(express.json());

// Logs the time, session_id, method, and url of incoming requests.
//app.use(logger);
var options = {
  headers: {
    "Authorization": API_KEY
  }
}
// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));

app.post('/', (req, res) => {
  console.log('hello world')
})

// ========== ZACH ROUTES ========== //
// Get All Products
app.get('/productOverview', (req, res) => {
  axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products', options)
  .then((response) => {
    res.json(response.data);
  })
  .catch((err) => {
    console.log('ERR ================== \n', err)
  })
})

// Get One Particular Product
app.get('/productOverview/:id', (req, res) => {
  axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/' + req.params.id, options)
  .then((response) => {
    res.json(response.data);
  })
  .catch((err) => {
    console.log('ERR ================== \n', err)
  })
})

//Get One Particular Product's styles
app.get('/productOverview/styles/:id', (req, res) => {
  axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/' + req.params.id + '/styles', options)
  .then((response) => {
    res.json(response.data);
  })
  .catch((err) => {
    console.log('ERR ================== \n')
  })
})
// ========== ZACH ROUTES ========== //

app.get('/getCategories', function(req, res,) {
  let sampleData = [
    {
      category: 'getCategory YEEZY',
      images: 'getCategory YEEZY',
      description: 'getCategory YEEZY',
      price: 1000,
      size: 'Kanye'
    }, {
      category: 'test2 if this was longer then what',
      images: 'test2',
      description: 'dafs',
      price: 1000,
      size: 'not Kanye'
    }, {
      category: 'test23',
      images: 'kjasdlfjaslejmflwj',
      description: 'dafs',
      price: 1000,
      size: 'maybe Kanye'
    }
  ];
  res.status(201).send(sampleData)
})



app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
