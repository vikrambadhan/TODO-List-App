// Require the Library (Schema)
const Task = require("../models/task");

// Function for home page

module.exports.home = function(req, res){
    Task.find({},function(err, tasks){
        if(err){
            console.log('Error in adding task to the page');
            return;
        }
        res.render('home', {
            title: "To Do App",
            list: tasks
        });
    });
    
}

// Function to add a task

module.exports.addTask = function(req, res){
    // Creating a task
    Task.create({
       description: req.body.description,
       category: req.body.category,
       date: req.body.date
    }, function(err, newTask){
        // Checking error (if any)
        if(err){
            console.log('Error in adding a new task');
            return;
        }
        // Redirecting back to the home page
        console.log(newTask);
        return res.redirect('back');
    });
}

//Function to delete a task

module.exports.deleteTask = function(req, res){

    console.log(req.query);

    // Aquiring the id
    var id = req.query;

    // Checking the number of tasks to be deleted
    var count = Object.keys(id).length;

    for(let i=0;i<count;i++){
     // deleting the task from the database by using their individual id
       Task.findByIdAndDelete(Object.keys(id)[i],function(err){
           // Handling the error (if any)
           if(err){
               console.log("error in deleting the task from db");
               console.log(id);
           }
       });
     console.log("task-deleted");
   }
   return res.redirect('back');
}