const mongoose = require('mongoose');

var Schema = mongoose.Schema;
var currentUser = new Schema({
    uuid: String,
    name: String,
 
   
});

module.exports = mongoose.model('currentUser', currentUser, "currentUsers");
