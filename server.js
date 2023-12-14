// Load express
const express = require('express');

// Create our express app
const app = express();

const pokemon = require('./models/pokemon');

//Gives View Engine
app.set('view engine','jsx')
//Initializes the view Engine

app.engine('jsx',require('express-react-views').createEngine())


app.use(express.urlencoded({extended:false}))
app.use((req,res,next) => {
    next()
})

app.use((req, res, next) => {
    console.log('I run for all routes');
    next();
});


app.get('/',(req,res) => {

    res.send(`<h1>Welcome to the Pokemon App!</h1>`)
})




app.get('/pokemon',(req,res) => {


    res.render('Index', {
        pokemon:pokemon})
    //res.send(pokemon)
})

// app.get('/pokemon/:id', (req,res) => {

//     res.send(req.params.id);
// })

app.get('/pokemon/new',(req,res)=>{
    res.render('New')
})
// ---------------------------------[New]

app.post('/pokemon',(req,res)=>{
    pokemon.push(req.body)
})

app.get('/pokemon/:indexOfPokemon',(req,res) => {
    res.render('Show',{
        poke:pokemon[req.params.indexOfPokemon]
    })
})



// Tell the app to listen on port 3000
// for HTTP requests from clients
app.listen(3000, function () {
    console.log('Listening on port 3000');
  });