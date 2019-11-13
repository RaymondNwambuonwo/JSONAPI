const express = require("express");
const app = express();
const parser = require("body-parser")
const Characters = require("./lib/models/Characters")

app.use(parser.json());

app.get("/", function (req, res) {
    // res.redirect("/Characters")
    Characters.find({}).then(Characters => {
        res.json(Characters);
    })
});




app.listen(3000, () => console.log('listening on port 3000'));