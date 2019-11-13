// const fs = require
const axios = require('axios');
const mongoose = require("./connection")
const Characters = require("../models/Characters")
url = 'https://swapi.co/api/people/'


axios.get(url)
.then(res => {
    // console.log(res)
    const CharMap = res.data.results.map(item => {
        const character = {};
        character.name = item.name;
        character. = item.name;
        character. = item.name;
        character. = item.name;
        character. = item.name;
        character. = item.name;
        character.f = item.name;
        character.f = item.name;
        character.f = item.name;
        character.f = item.name;
        character.f = item.name;
        character.f = item.name;
        character.f = item.name;
    })
})