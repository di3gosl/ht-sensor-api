require('./../schemas/db');
const mongoose = require('mongoose');
const sensorSchema = require('./../schemas/sensorSchema');
const measurementSchema = require('./../schemas/measurementSchema');
const Sensor = mongoose.connection.model('Sensor', sensorSchema);
const Measurement = mongoose.connection.model('Measurement', measurementSchema);

const findSensor = async (id) => {
    try {
        return await Sensor.findOne({ _id: id });
    } catch (e) {
        return null;
    }
};

const createMeasurement = async (req, res) => {
    const measurement = new Measurement(req.body);
    const sensor = await findSensor(req.params.id);
    try {
        res.status(200);
        sensor.measurements.push(measurement);
        res.json(await sensor.save());
    } catch (e) {
        res.status(400);
        res.json({ message: 'error' });
    }
};

module.exports = {
    createMeasurement
};