var express = require('express');
var router = express.Router();
const tripsController = require('../controllers/trips');

/* GET home page. */
router
    .route('/trips')
    .get(tripsController.tripsList)

module.exports = router;