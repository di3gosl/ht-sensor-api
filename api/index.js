const express = require('express');
const sensorRouter = require('./routes/sensorRouter');

const api = express();

api.use(express.json());
api.use(express.urlencoded({ extended: false }));
api.use('/sensors', sensorRouter);

module.exports = api;