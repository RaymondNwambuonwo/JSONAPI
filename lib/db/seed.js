const axios = require('axios');
const mongoose = require("./connection")
const Characters = require("../models/Characters")
const url = 'https://swapi.co/api/people/'
const swapi = require('swapi-node');

const starWars = []



swapi.get(url)
.then((result) => {
    // console.log(result);
    for(i= 0; i < result.results.length; i++){
        starWars.push(result.results[i])
    }
    return result.nextPage();
}).then((result) => {
    // console.log(starWars); 
    for(i= 0; i < result.results.length; i++){
        starWars.push(result.results[i])
    }
    return result.nextPage();
}).then((result) => {
    // console.log(starWars); 
    for(i= 0; i < result.results.length; i++){
        starWars.push(result.results[i])
    }
    return result.nextPage();
}).then((result) => {
    // console.log(starWars); 
    for(i= 0; i < result.results.length; i++){
        starWars.push(result.results[i])
    }
    return result.nextPage();
}).then((result) => {
    // console.log(starWars); 
    for(i= 0; i < result.results.length; i++){
        starWars.push(result.results[i])
    }
    return result.nextPage();
}).then((result) => {
    // console.log(starWars); 
    for(i= 0; i < result.results.length; i++){
        starWars.push(result.results[i])
    }
    return result.nextPage();
}).then((result) => {
    // console.log(starWars);
    for(i= 0; i < result.results.length; i++){
        starWars.push(result.results[i])
    } 
    return result.nextPage();
}).then((result) => {
    // console.log(starWars); 
    for(i= 0; i < result.results.length; i++){
        starWars.push(result.results[i])
    }
    return result.nextPage();
}).then((result) => {
    // console.log(starWars); 
    for(i= 0; i < result.results.length; i++){
        starWars.push(result.results[i])
    }
    return result 
}).then(res => {
    // console.log(res)
    console.log(starWars)
    const CharMap = starWars.map(item => {
        const character = {};
        character.name = item.name;
        character.height = item.height;
        character.mass = item.mass;
        character.hair_color = item.hair_color;
        character.skin_color = item.skin_color;
        character.eye_color = item.eye_color;
        character.birth_Year = item.birth_Year;
        character.gender = item.gender;
        character.homeworld = item.homeworld;
        character.films = item.films;
        character.species = item.species;
        character.vehicles = item.vehicles;
        character.starships = item.starships;
        return character;
    });
    Characters.remove({}).then(() =>{
        Characters.create(CharMap).then(()=>{
            process.exit()
        });
    });
})
.catch(err => {
    console.log(err)
  })



