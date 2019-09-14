const mongoose = require('mongoose');

const DB_URI = 'mongodb+srv://di3gosl:11101ella@clustertest-c95jc.mongodb.net/ht_sensor';

mongoose.connect(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

module.exports = db;