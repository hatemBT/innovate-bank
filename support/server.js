'use strict';

require('dotenv').config({silent: true, path: `${__dirname}/.env`});
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var server = require('./app');
var port = 4000;

console.log(`Running on ${process.env.BASE_PATH}:${port}`)
//Connecting to the database
mongoose.connect(process.env.MONGO_URL, function (ignore, connection) {
    connection.onOpen();
    server.listen(port, function () {
        console.log('Server running on port: %d', port);
    });
});
