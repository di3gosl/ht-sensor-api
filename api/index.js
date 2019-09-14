const express = require('express');
const sensorRouter = require('./routes');

const api = express();

api.use('/sensors', sensorRouter);

module.exports = api;