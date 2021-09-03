// Require the library
const mongoose = require('mongoose');

// Connect to the database
mongoose.connect('mongodb://localhost/to_do_list_db');

// Acquire the connection made
const db = mongoose.connection;

// Handling the error(if any) in the connection
db.on('error',console.error.bind('Error occured while connecting to db'));

// Printing if successfull
db.once('open',function(){
    console.log('Successfully connect to the database');
});