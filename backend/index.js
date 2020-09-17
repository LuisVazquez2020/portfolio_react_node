const express = require('express');
const cors = require('cors');
const app = express();

port = process.env.PORT || 8080;
app.use(cors());

const About = require('./JSON/About.json');
const Portfolio = require('./JSON/Portfolio.json');

app.get('/', (req, res)=> {
    res.send('Hola Mundo, este es mi portfolio')
})



app.get('/about', (req, res)=>{
    res.json(About);
})

app.get('/portfolio', (req, res)=>{
    res.json(Portfolio)
})




app.listen(port, ()=>{
    console.log(`this app is running on port: ${port}`);
})