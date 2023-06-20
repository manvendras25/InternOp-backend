const connectToMongo = require('./db');
const express = require('express')
var cors = require('cors') 
const dotenv = require("dotenv").config();

const bodyParser = require("body-parser");

connectToMongo();
const app = express()
const port = 5000


app.use(bodyParser.json({limit: '5mb'}));
app.use(bodyParser.urlencoded({limit: '5mb', extended: true}));
app.use(cors())
app.use(express.json());


// Available Routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/offers', require('./routes/offers'))
app.use('/api/studentoffers', require('./routes/studentoffers'))


app.listen(port, () => {
  console.log(`InternOp backend listening at http://localhost:${port}`)
})