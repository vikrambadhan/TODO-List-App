// Requiring the library
const mongoose = require('mongoose');

//Creating a Schema
const taskSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    }
});

// Creating a Collection
const Task = mongoose.model('Task',taskSchema);

// Exporting the collection
module.exports = Task;