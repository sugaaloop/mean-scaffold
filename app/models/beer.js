// app/models/beer.js

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BeerSchema = new Schema({
    name: {type : String, default: ''},
    brewer: {type : String, default: ''},
    style: {type : String, default: ''},
    abv: {type : Number, default: 0.0}
    //name: String
});

module.exports = mongoose.model('Beer', BeerSchema);