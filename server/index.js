require("dotenv").config();
const express = require("express");
const path = require("path");
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

// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));

app.post('/', (req, res) => {
  console.log('hello world')
})


app.get('/getCategories', function(req, res) {
  let sampleData = [
    {
      category: 'getCategory YEEZY',
      images: 'getCategory YEEZY',
      description: 'getCategory YEEZY',
      price: 1000,
      size: 'Kanye'
    }
  ];
  res.status(201).send(sampleData)
})



app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
