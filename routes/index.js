const express = require('express');

const routes = express.Router();

// subscription COntroller
const subscription = require('../controllers/subscriptionController');

// Purchase Routes
routes.use('/purchase', require('../routes/purchaseRoutes'))

module.exports = routes