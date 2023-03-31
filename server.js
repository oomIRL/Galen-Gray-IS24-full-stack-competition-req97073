const express = require('express');
const bodyParser = require('body-parser');
const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,
   optionSuccessStatus:200,
}

// the api server is using express, body parser, cors and fs for json file i/o
const app = express();
const fs = require('fs');

app.use(cors(corsOptions))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const routes = require('./routes/api')(app, fs);

// port 3000 for the api server
const server = app.listen(3000, () => {
    console.log('listening on port %s...', server.address().port);
});