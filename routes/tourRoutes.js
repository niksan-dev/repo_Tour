const tourController = require('./../controllers/tourController');
//above object can be used like below called object destructure
//const { getAllTours, getTour, createTour, updateTour, deleteTour } = require('./../controllers/tourController');
const express = require('express');
const router = express.Router();
console.log("fffff");

//param middleware
router.param('id', (req, res, next, val) => {
    console.log(`Tour id is ${val}`);
    next();
});


router
    .route('/')
    .get(tourController.getAllTours)
    .post(tourController.createTour);

router
    .route('/:id')
    .patch(tourController.updateTour)
    .get(tourController.getTour)
    .delete(tourController.deleteTour);

module.exports = router;