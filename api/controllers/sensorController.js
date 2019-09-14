require('./../schemas/db');
const mongoose = require('mongoose');
const sensorSchema = require('./../schemas/sensorSchema');
const Sensor = mongoose.connection.model('Sensor', sensorSchema);

const findSensor = async (id) => {
    try {
        return await Sensor.findOne({ _id: id });
    } catch (e) {
        return null;
    }
};

const getSensors = async (req, res) => {
    const sensors = await Sensor.find();
    res.json(sensors);
};

const getSensor = async (req, res) => {
    const sensor = await findSensor(req.params.id);
    res.json(sensor ? sensor : { message: 'item not found' });
};

const createSensor = async (req, res) => {
    const sensor = new Sensor(req.body);
    try {
        res.json(await sensor.save());
    } catch (e) {
        res.json({ message: 'error' });
    }
};

const updateSensor = async (req, res) => {
    const sensor = await findSensor(req.params.id);
    if(!sensor) { 
        res.json({ message: 'item not found' });
        return;
    }
    
    try {
        await Sensor.updateOne({ _id: req.params.id }, req.body);
        res.json(await findSensor(req.params.id));
    } catch (e) {
        res.json({ message: 'error' });
    }
};

const deleteSensor = async (req, res) => {
    const sensor = await findSensor(req.params.id);
    if(!sensor) { 
        res.json({ message: 'item not found' });
        return;
    }
    
    try {
        await Sensor.deleteOne({ _id: req.params.id });
        res.json({ message: 'deleted' });
    } catch (e) {
        res.json({ message: 'error' });
    }
}

module.exports = {
    getSensors,
    getSensor,
    createSensor,
    updateSensor,
    deleteSensor
};