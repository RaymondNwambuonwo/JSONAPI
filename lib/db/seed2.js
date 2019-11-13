const axios = require('axios');
const mongoose = require("./connection")
const Films = require("../models/Films")
const url = 'https://swapi.co/api/films/'
const swapi = require('swapi-node');


swapi.get(url)
.then((result) => {
    console.log(result);
    return result
})
.then(res => {
    // console.log(res)
    const FilmMap = res.results.map(item => {
        const film = {};
        film.title = item.title;
        film.episode_id = item.episode_id;
        film.director = item.director;
        film.release_date = item.release_date;
        return film;
    });
    Films.remove({}).then(() =>{
        Films.create(FilmMap).then(()=>{
            process.exit()
        });
    });
})
.catch(err => {
    console.log(err)
  })

