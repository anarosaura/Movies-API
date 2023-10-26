const {model, Schema} = require('mongoose');

const movieSchema = new Schema({
    name: {type:String, require: true},
    synopsis: {type:String, require: true},
    genre: {type:String, require: true},
    durtion: {type:Number, require: true},
    director: {type:String, require: true},
    actors: {type:String, require: false},
});

module.exports = model('movies', movieSchema)