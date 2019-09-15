const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sensorSchema = new Schema({
    code: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    temperature: { type: Number, default: null },
    humidity: { type: Number, default: null }
});

module.exports = sensorSchema;