//main file for our application

// app instantiation
const express = require('express'); //express
const connectDB = require('./config/db'); //Database
const app = express(); //app instance

// connect to the database
connectDB();

// Routes
app.get('/', (req,res) => res.send('Hello my friends'));


// Ports
const port = process.env.PORT || 8082;


// run app
app.listen(port, () => console.log(
    `Server running at http://localhost:${port}`
))