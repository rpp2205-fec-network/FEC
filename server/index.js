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

// ========== ZACH ROUTES START ========== //
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
// ========== ZACH ROUTES END ========== //


// ============ KEN ROUTES START ============= //
app.get('/relatedProducts', function(req, res) {
  //console.log(req.query)
  let arr = [];
  let result = [];
  //console.log(req.query.id, 'kenTest1')
  axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/' + req.query.id + '/related', options)
  .then((response) => {

    //console.log('response', response.data)
    //arr.push(response)
    let loop = response.data.map((item) => {
      return axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/' + item, options)
      .then((data) => {
        return data.data
      })
      .catch((err) => {
        console.log('ERR in /productOverview/related second GET')
      })
    })
    Promise.all(loop).then((data) => {
      //console.log(data, 'inside promise') // working
      res.status(200).send(data)
    })
  })
  .catch((err) => {
    console.log('ERR in /productOverview/related')
  })
  // res.status(201).send(sampleData)
})
// ============ KEN ROUTES END ============= //

// ============== CHELSEA ROUTES START ============== //

app.get('/reviews/', (req, res) => {
  axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews/?product_id=71720', options)
  .then((response) => {
    console.log('DATA IN REVIEWS GET \n', response.data);
    res.json(response.data);
  })
  .catch((err) => {
    console.log('ERR ================== \n', err)
  })
})
//
//71701 - original
//71719 - response from internal
//71720 - response from internal, pictures
// ============== CHELSEA ROUTES END ============== //

app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
