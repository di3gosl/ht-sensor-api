const express = require('express');
const sensorRouter = require('./routes/sensorRouter');
const measurementRouter = require('./routes/measurementRouter');

const api = express();

api.use(express.json());
api.use(express.urlencoded({ extended: false }));

api.use('/sensors', sensorRouter);
api.use('/measurements', measurementRouter);

module.exports = api;