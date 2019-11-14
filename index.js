const express = require("express");
const app = express();
const parser = require("body-parser")
const Characters = require("./lib/models/Characters")
const Films = require("./lib/models/Films")

app.use(parser.json());

app.get("/", function(req, res) {
    res.send("Get homepage")
})

app.get("/Characters", function (req, res) {
    // res.redirect("/Characters")
    Characters.find({}).then(Characters => {
        res.json(Characters);
    })
});

app.get("/Films", function (req, res) {
    // res.redirect("/Characters")
    Films.find({}).then(Films => {
        res.json(Films);
    })
});


app.listen(3000, () => console.log('listening on port 3000'));