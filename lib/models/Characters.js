const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const filmSchema = new Schema({
    title: String,
    episode_id: Number,
    director: String,
    release_date: Date
})

const characterSchema = new Schema({
    name: String,
    height: String,
    mass: String,
    hair_color: String,
    skin_color: String,
    eye_color: String,
    birth_Year: String,
    gender: String,
    homeworld: String,
    films: [filmSchema],
    species: Array,
    vehicles: Array,
    starships: Array
})

module.exports = mongoose.model('Characters', characterSchema)