// Requiring express
const express = require('express');

// Setting up router
const router = express.Router();

//Requiring the controller
const homeController = require('../controllers/home_controller');
router.get('/',homeController.home);

// Action routers
router.post('/add-task',homeController.addTask);
router.get('/delete-task',homeController.deleteTask);

// Exporting routers
module.exports = router;