const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const characterSchema = new Schema({
    name: String,
    height: String,
    mass: String,
    hair_color: String,
    skin_color: String,
    eye_color: String,
    birth_Year: String,
    gender: String,
    homeworld: [],
    films: [],
    species: [],
    vehicles: [],
    starships: []
})

module.exports = mongoose.model('Characters', characterSchema)