const mongoose = require("../db/connection");
const Schema = mongoose.Schema;


const starshipsSchema = new Schema({
    name: String,
    model: String,
    starship_class: String,
    manufacturer: String,
    cost_in_credits: String,
    length: String,
    crew: String,
    passengers: String,
    max_atmosphering_speed: String,
    hyperdrive_rating: String,
    MGLT: String,
    cargo_capacity: String
})



module.exports = mongoose.model('Starships', starshipsSchema)