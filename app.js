const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');
require('dotenv/config');
const api = process.env.API_URL;


//middleware
app.use(morgan('tiny'));
app.use(express.json());

//Mongodb connection
mongoose.connect(process.env.CONNECTION_STRING)
.then(() =>{
    console.log('DB Connection is ready!')
})
.catch((err) => {
    console.log(err);
})

//Get Method
app.get('/product', (req, res) =>{
    res.send('hello 2023');
})


//Post Method
app.post('/products', (req, res) =>{
    const newProduct = req.body;
    console.log(newProduct);
    res.send(newProduct);
} )
app.listen(9014, ()=>{
    console.log('Server is listening on http://localhost:9014')
})


