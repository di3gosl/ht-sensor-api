const express = require('express');
const sensorController = require('./../controllers/sensorController');

const sensorRouter = express.Router();

sensorRouter.get('/', sensorController.getSensors);
sensorRouter.get('/:id', sensorController.getSensor);

module.exports = sensorRouter;