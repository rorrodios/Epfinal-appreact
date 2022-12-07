const express = require('express');
const movieSchema = require('../models/movie');

const addMovie = async (req, res) => {
    const {name, year, calificacion, image, description} = req.body;
    const newMovie = movieSchema(req.body);
    const movieFound = await movieSchema.findOne({name});
    if (movieFound)
        return res.json({message : 'Ya existe una pelicula con ese nombre!'});
    else{
        await newMovie.save().then(() => (res.json('Pelicula Guardada'))).catch((error) => res.json(error));
    }

}

const deleteMovie = async (req, res) => {
    console.log('entre al delete');
    const {id} = req.body;
    await movieSchema.findByIdAndRemove(id).then(() => (res.json('Pelicula Removida'))).catch((error) => res.json(error));

}

const getMovies = async(req,res) =>{
    
    const movies = await movieSchema.find();
    res.json(movies);
    
}

module.exports = {addMovie, deleteMovie, getMovies};