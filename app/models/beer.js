// app/models/beer.js

var mongoose = require('mongoose');

module.exports = mongoose.model('Beer', {
    name: {type : String, default: ''},
    brewer: {type : String, default: ''},
    style: {type : String, default: ''},
    abv: {type : Number, default: 0.0}
});