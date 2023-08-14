var express = require('express');
var router = express.Router();
const authController = require('../controllers/authentication');
const tripsController = require('../controllers/trips');
const jwt = require('express-jwt');
const auth = jwt({
    secret: process.env.JWT_SECRET,
    userProperty: 'payload',
    algorithms: ["HS256"]
})

router 
    .route('/login')
    .post(authController.login);

router 
    .route('/register')
    .post(authController.register);

/* GET home page. */
router
    .route('/trips')
    .get(tripsController.tripsList)
    .post(auth, tripsController.tripsAddTrip);

router
    .route('/trips/:tripCode')
    .get(tripsController.tripsFindCode)
    .put(auth, tripsController.tripsUpdateTrip);

// router.get('/trips', tripsController.tripsList);
// router.get('/trips/:tripCode', tripsController.tripsFindCode);


module.exports = router;