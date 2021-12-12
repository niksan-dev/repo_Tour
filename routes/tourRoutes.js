const tourController = require('./../controllers/tourController');
//above object can be used like below called object destructure
//const { getAllTours, getTour, createTour, updateTour, deleteTour } = require('./../controllers/tourController');
const express = require('express');
const router = express.Router();
console.log("fffff");

//param middleware
// router.param('id', (req, res, next, val) => {
//     console.log(`Tour id is ${val}`);
//     next();
// });

//the above code is replaced by below snippet
router.param('id', tourController.checkId);


//chaining multiple middleware

router
    .route('/')
    .get(tourController.getAllTours)
    .post(tourController.checkBody, tourController.createTour);

router
    .route('/:id')
    .patch(tourController.updateTour)
    .get(tourController.getTour)
    .delete(tourController.deleteTour);

module.exports = router;