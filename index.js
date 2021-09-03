// Use 'npm start' command to start

// Requiring different libraries
const express = require('express');
const db = require('./config/mongoose');
const Task = require('./models/task');

// Setting app and port
const app = express();
const port = 8000;

// Setting differen properties of app
app.set('view engine','ejs');
app.set('views', './views');

// Middleware
app.use(express.urlencoded());

// Adding access to Static files
app.use(express.static('assets'));

// Access to routers
app.use('/',require("./routes"));

// Handling error
app.listen(port, function(err){
    if(err){
        console.log(`Error: ${err}`);
    }

    console.log(`Successfully added express, port: ${port}`);
});