const express = require("express");
const app = express();
const cors = require('cors')
const parser = require("body-parser")
const Characters = require("./lib/models/Characters")
const Films = require("./lib/models/Films")
const Starships = require("./lib/models/Starships")

 
app.use(cors())

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

app.get("/Characters/name/:name", function (req, res) {
    // res.redirect("/Characters")
    Characters.find({name: req.params.name}).then(Character => {
        res.json(Character);
    })
});

app.get("/Characters/id/:id", function (req, res) {
    // res.redirect("/Characters")
    Characters.find({_id: req.params.id}).then(Character => {
        res.json(Character);
    })
});

app.put("/Characters/name/:name", function (req, res) {
    // res.redirect("/Characters")
    Characters.findOne({name: req.params.name}, {$set: req.body}).then(Character => {
        res.json(Character);
    })
});

app.post("/Characters", function (req, res) {
    // res.redirect("/Characters")
    Characters.create(req.body).then(Character => {
        res.json(Character);
    })
});

app.delete("/Characters/name/:name", function (req, res) {
    // res.redirect("/Characters")
    Characters.deleteOne({name: req.params.name}).then(Character => {
        res.json(Character);
    })
});

app.delete("/Characters/id/:id", function (req, res) {
    // res.redirect("/Characters")
    Characters.deleteOne({_id: req.params.id}).then(Character => {
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

app.set("port", process.env.PORT || 3000);

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});



