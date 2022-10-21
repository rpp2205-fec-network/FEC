require("dotenv").config();
const { default: axios } = require("axios");
const express = require("express");
const { get } = require("http");
const path = require("path");
const API_KEY = require("../client/src/config/config.js");
var bodyParser = require('body-parser');
// const sessionHandler = require("./middleware/session-handler");
// const logger = require("./middleware/logger");

const app = express();

// Adds `req.session_id` based on the incoming cookie value.
// Generates a new session if one does not exist.
//app.use(sessionHandler);

// Needed to receive json data
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(bodyParser.json())

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


// ========== BECCA ROUTES START ========== //

app.get('/getQuestions', function(req, res) {
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/questions?product_id=71698`, options)
  .then((questions) => {
    console.log('DATA IN QUESTIONS ROUTE',questions.data.results)
    res.json(questions.data)
  })
  .catch(err => console.log(err))
})

app.get('/getAnswers', function(req, res) {
  var answerId = req.query.id;
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/questions/${answerId}/answers?count=100`, options)
  .then((answers) => {
    res.json(answers.data)
  })
  .catch(err => console.log(err))
})

app.put('/putQuestionHelpful', function(req, res) {
  var questionId = req.body.id;
  return axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/questions/${questionId}/helpful`, {}, options)
  .then((response) => {
    console.log('Updated')
    res.status(204);
  })
  .catch(err => console.log(err))
})

app.put('/putAnswerHelpful', function(req, res) {
  var answerId = req.body.id;
  return axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/answers/${answerId}/helpful`, {}, options)
  .then((response) => {
    console.log('Updated')
    res.status(204);
  })
  .catch(err => console.log(err))
})

app.put('/reportAnswer', function(req, res) {
  console.log('REPORT ANSWER ID', req.body.id)
  var answerId = req.body.id;
  return axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/answers/${answerId}/report`, {}, options)
  .then((response) => {
    console.log('Reported')
    res.status(204);
  })
  .catch(err => console.log(err))
})

app.post('/postAnswer', function(req, res) {
  var questionId = req.body.question_id;
  var body = req.body.answer;
  axios.post(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/questions/${questionId}/answers`, body, options)
  .then((response) => {
    console.log('CREATED')
    res.status(201);
  })
  .catch(err => console.log(err.response.data))
})


// ========== BECCA ROUTES END ========== //


// ============ KEN ROUTES START ============= //
app.get('/relatedProducts', function(req, res) {
  //console.log(req.query)
  let arr = [];
  let result = [];
  //console.log(req.query.id, 'kenTest1')
  axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/' + req.query.id + '/related', options)
  .then((response) => {

    // removing duplicates from product list
    let noDuplicates = [];
    response.data.forEach((item) => {
      if (!noDuplicates.includes(item)) {
        noDuplicates.push(item)
      }
    })

    // making an array of promises to return an array of results
    let loop = noDuplicates.map((item) => {
      return axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/' + item, options)
      .then((data) => {
        return data.data
      })
      .catch((err) => {
        console.log('ERR in /productOverview/related second GET')
      })
    })

    // running array of promises async
    Promise.all(loop).then((data) => {
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

app.get('/reviews/:product_id/:sort', (req, res) => {
  console.log('GET PARAMS', req.params, req.params.product_id, req.params.sort)
  axios({
    method: 'get',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews/?product_id=${req.params.product_id}&sort=${req.params.sort}`,
    headers: {
      "Authorization": API_KEY
    }
  })
  .then((response) => {
    //console.log('DATA IN REVIEWS GET \n', response);
    res.json(response.data);
  })
  .catch((err) => {
    console.log('MAIN GET ERR ================== \n', err.response.data)
  })
})

app.get('/getMetaData/meta/:product_id', function(req, res) {
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews/meta?product_id=71701`, options)
  .then((response) => {
    console.log('SERVER META DATA \n', response.data)
    res.json(response.data)
  })
  .catch(err => console.log(err))
})

//${req.params.product_id}

// app.get('/reviews/meta/:product_id', (req, res) => {
//   console.log('META DATA PARAMS', req.params)
//   axios({
//     method: 'get',
//     url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews/meta?product_id=71701`,
//     headers: {
//       "Authorization": API_KEY
//     }
//   })
//   .then((response) => {
//     console.log('SERVER META DATA \n', response.data);
//     res.json(response.data);
//   })
//   .catch((err) => {
//     console.log('META ERR ================== \n', err)
//   })
// })

app.put('/reviewHelpful', (req, res) => {
  console.log('REQQQQQQQ', req.body.review_id)
  axios({
    method: 'put',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews/${req.body.review_id}/helpful`,
    headers: {
      "Authorization": API_KEY
    }
  })
  .then((response) => {
    //console.log('SUCCESS ADDING HELPFUL \n', response)
    res.status(204).send(response.data);
  })
  .catch((err) => {
    console.log('ERR ADDING HELPFUL ================== \n', err)
  })
})

// ============== CHELSEA ROUTES END ============== //

app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
