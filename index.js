const express = require("express");
const app = express();
const cors = require('cors')
const parser = require("body-parser")
const Characters = require("./lib/models/Characters")
const Films = require("./lib/models/Films")
const Starships = require("./lib/models/Starships")
const Characters2 = require("./lib/models/Characters2")

 
app.use(cors())

app.use(parser.json());

app.get("/", function(req, res) {
    res.send("Get homepage")
})

app.get("/Characters2", function (req, res) {
    // res.redirect("/Characters")
    Characters2.find({}).then(Characters => {
        res.json(Characters);
    })
});

app.get("/Characters2/name/:name", function (req, res) {
    // res.redirect("/Characters")
    Characters2.find({name: req.params.name}).then(Character => {
        res.json(Character);
    })
});

app.get("/Characters2/id/:id", function (req, res) {
    // res.redirect("/Characters")
    Characters2.find({_id: req.params.id}).then(Character => {
        res.json(Character);
    })
});

app.put("/Characters2/name/:name", function (req, res) {
    // res.redirect("/Characters")
    Characters2.findOne({name: req.params.name}, {$set: req.body}).then(Character => {
        res.json(Character);
    })
});

app.post("/Characters2", function (req, res) {
    // res.redirect("/Characters")
    Characters2.create(req.body).then(Character => {
        res.json(Character);
    })
});

app.delete("/Characters2/name/:name", function (req, res) {
    // res.redirect("/Characters")
    Characters2.deleteOne({name: req.params.name}).then(Character => {
        res.json(Character);
    })
});

app.delete("/Characters2/id/:id", function (req, res) {
    // res.redirect("/Characters")
    Characters2.deleteOne({_id: req.params.id}).then(Character => {
        res.json(Character);
    })
});


app.get("/Films", function (req, res) {
    // res.redirect("/Characters")
    Films.find({}).then(Films => {
        res.json(Films);
    })
});

app.get("/Starships", function (req, res) {
    // res.redirect("/Characters")
    Starships.find({}).then(Starships => {
        res.json(Starships);
    })
});

app.set("port", process.env.PORT || 3001);

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});



