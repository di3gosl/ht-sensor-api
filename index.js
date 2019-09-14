const express = require('express');
const api = require('./api');

const app = express();

app.use('/api/v1', api);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log('Server started at port: ' + PORT));