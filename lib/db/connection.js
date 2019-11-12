const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/APIproject', { useNewUrlParser: true })
module.exports = mongoose;