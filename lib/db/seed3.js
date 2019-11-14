const axios = require('axios');
const mongoose = require("./connection")
const Starships = require("../models/Starships")
const url = 'https://swapi.co/api/starships/'
const swapi = require('swapi-node');

const ships = []

swapi.get(url)
.then((result) => {
    // console.log(ships);
    for(i= 0; i < result.results.length; i++){
        ships.push(result.results[i])
    } 
    return result.nextPage();
}).then((result) => {
    // console.log(ships); 
    for(i= 0; i < result.results.length; i++){
        ships.push(result.results[i])
    }
    return result.nextPage();
}).then((result) => {
    // console.log(ships); 
    for(i= 0; i < result.results.length; i++){
        ships.push(result.results[i])
    }
    return result.nextPage();
}).then((result) => {
    console.log(ships); 
    for(i= 0; i < result.results.length; i++){
        ships.push(result.results[i])
    }
    return result 
}).then(res => {
    // console.log(res)
    console.log(ships)
    const ShipMap = ships.map(item => {
        const shipper = {};
        shipper.name = item.name;
        shipper.model = item.model;
        shipper.mass = item.mass;
        shipper.starship_class = item.starship_class;
        shipper.manufacturer = item.manufacturer;
        shipper.cost_in_credits = item.cost_in_credits;
        shipper.length = item.length;
        shipper.crew = item.crew;
        shipper.passengers = item.passengers;
        shipper.max_atmosphering_speed = item.max_atmosphering_speed;
        shipper.hyperdrive_rating = item.hyperdrive_rating;
        shipper.MGLT = item.MGLT;
        return shipper;
    });
    Starships.remove({}).then(() =>{
        Starships.create(ShipMap).then(()=>{
            process.exit()
        });
    });
})
.catch(err => {
    console.log(err)
  })