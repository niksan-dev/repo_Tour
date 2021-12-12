const { json } = require('body-parser');
const express = require('express');
const morgan = require('morgan');
const tourRouter = require('./routes/tourRoutes');

const app = express();

//below are middlewares used
app.use(json());
app.use(morgan('dev'));

//accessing static files
app.use(express.static(`${__dirname}/public`));
app.use((req, res, next) => {
    console.log('Hello Im a middleware');
    next();
});
app.use((req, res, next) => {
    req.requestTime = new Date().toISOString();
    next();
});

//mounting a tour router
app.use('/api/v1/tours', tourRouter);

//exporting app to other files
module.exports = app;