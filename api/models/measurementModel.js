const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const measurementSchema = new Schema({
    value: { type: Number, required: true },
    type: { type: Number, required: true }
});

module.exports = measurementSchema;