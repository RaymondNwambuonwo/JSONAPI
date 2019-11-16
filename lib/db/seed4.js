const axios = require('axios');
const mongoose = require("./connection")
const Characters2 = require("../models/Characters2")
const url = 'https://akabab.github.io/starwars-api/api/all.json'


axios.get(url)
.then(res => {
    console.log(res.data)
    const Char2Map = res.data.map(item => {
        const Char2 = {};
        Char2.name = item.name;
        Char2.height = item.height;
        Char2.mass = item.mass;
        Char2.gender = item.gender;
        Char2.homeworld = item.homeworld;
        Char2.wiki = item.wiki;
        Char2.image = item.image;
        Char2.born = item.born;
        Char2.bornLocation = item.bornLocation;
        Char2.died = item.died;
        Char2.diedLocation = item.diedLocation;
        Char2.hair_color = item.hair_color;
        Char2.eye_color = item.eye_color;
        Char2.skin_color = item.skin_color;
        Char2.birth_year = item.birth_year;
        Char2.cybernetics = item.cybernetics;
        Char2.affiliations = item.affiliations;
        Char2.masters = item.masters;
        Char2.aprentices = item.aprentices;
        Char2.formerAffiliations = item.formerAffiliations;
        return Char2;
    });
    Characters2.remove({}).then(() =>{
        Characters2.create(Char2Map).then(()=>{
            process.exit()
        });
    });
})
.catch(err => {
    console.log(err)
})