const express = require('express');

const routes = express.Router();

// purchase Controller 
const purchaseController = require('../controllers/purchaseController');

routes.post('/', purchaseController.AddPurchase);

module.exports = routes