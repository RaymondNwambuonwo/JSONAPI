const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const characters2Schema = new Schema({
    name: String,
    height: Number,
    mass: Number,
    gender: String,
    homeworld: Array,
    wiki: String,
    image: String,
    born: String || Number,
    bornLocation: String,
    died: Number,
    diedLocation: String,
    hair_color: String,
    eye_color: String,
    skin_color: String,
    birth_year: String,
    cybernetics: Array,
    affiliations: Array,
    masters: Array,
    aprentices: Array,
    formerAffiliations: Array
})

module.exports = mongoose.model('Characters2', characters2Schema)