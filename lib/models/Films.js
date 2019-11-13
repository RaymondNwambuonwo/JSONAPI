const mongoose = require("../db/connection");
const Schema = mongoose.Schema;


const filmSchema = new Schema({
    title: String,
    episode_id: Number,
    director: String,
    release_date: Date
})









module.exports = mongoose.model('Films', filmSchema)