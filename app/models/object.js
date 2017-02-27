// app/models/beer.js

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ObjectSchema = new Schema({
    name: {type : String, default: ''},
    description: {type : String, default: ''}
});

module.exports = mongoose.model('Object', ObjectSchema);
