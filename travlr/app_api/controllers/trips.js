const mongoose = require('mongoose'); // .set('debug','true');
const Model = mongoose.model('trips');

// Get /trips - lists all trips
const tripsList = async (req, res) => {
    Model
        .find({}) // Empty filter for all
        .exec((err, trips) => {
            if (!trips) {
                return res
                    .status(404)
                    .json({ "message": "trips not found" });
            } else if (err) {
                return res
                    .status(404)
                    .json(err);
            } else {
                return res
                    .status(200)
                    .json(trips)
            }           
        });
};

// GET: /trips/:tripcode - returns a single trip
const tripsFindCode = async (req, res) => {
    Model
        .find({ 'code': req.params.tripCode })
        .exec((err, trip) => {
            if (!trip) {
                return res
                    .status(404)
                    .json({ "message": "trip not found" });
            } else if (err) {
                return res
                    .status(404)
                    .json(err);
            } else {
                return res
                    .status(200)
                    .json(trip)
            }           
        });
}

module.exports = {
    tripsList,
    tripsFindCode
};