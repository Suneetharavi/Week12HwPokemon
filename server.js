// Load express
const express = require('express');

// Create our express app
const app = express();

const pokemon = require('./models/pokemon');


app.get('/',(req,res) => {

    res.send(`<h1>Welcome to the Pokemon App!</h1>`)
})

app.get('/pokemon',(req,res) => {

    res.send(pokemon)
})




// Tell the app to listen on port 3000
// for HTTP requests from clients
app.listen(3000, function () {
    console.log('Listening on port 3000');
  });