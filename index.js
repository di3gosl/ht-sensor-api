const express = require('express');
const api = require('./api');
var cors = require('cors');

const app = express();

app.use(cors());
app.use('/api/v1', api);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log('Server started at port: ' + PORT));