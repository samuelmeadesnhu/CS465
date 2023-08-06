var express = require('express');
var router = express.Router();
const tripsController = require('../controllers/trips');

/* GET home page. */
// router
//     .route('/trips')
//     .get(tripsController.tripsList)

// router
//     .route('/trips/:tripCode')
//     .get(tripsController.tripsFindCode); 

router.get('/trips', tripsController.tripsList);
router.get('/trips/:tripCode', tripsController.tripsFindCode);


module.exports = router;