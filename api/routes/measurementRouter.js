const express = require('express');
const measurementController = require('./../controllers/measurementController');

const measurementRouter = express.Router();

measurementRouter.post('/:id', measurementController.createMeasurement);

module.exports = measurementRouter;