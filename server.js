// Load express
const express = require('express');

// Create our express app
const app = express();

const pokemon = require('./models/pokemon');

//Gives View Engine
app.set('view engine','jsx')
//Initializes the view Engine

app.engine('jsx',require('express-react-views').createEngine())



app.get('/',(req,res) => {

    res.send(`<h1>Welcome to the Pokemon App!</h1>`)
})

app.get('/pokemon',(req,res) => {


    res.render('Index', {
        pokemon})
    //res.send(pokemon)
})

app.get('/pokemon/:id', (req,res) => {

    res.send(req.params.id);
})




// Tell the app to listen on port 3000
// for HTTP requests from clients
app.listen(3000, function () {
    console.log('Listening on port 3000');
  });