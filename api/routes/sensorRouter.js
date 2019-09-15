const express = require('express');
const sensorController = require('./../controllers/sensorController');

const sensorRouter = express.Router();

sensorRouter.get('/', sensorController.getSensors);
sensorRouter.get('/:id', sensorController.getSensor);
sensorRouter.post('/', sensorController.createSensor);
sensorRouter.put('/:id', sensorController.updateSensor);
sensorRouter.delete('/:id', sensorController.deleteSensor);

module.exports = sensorRouter;