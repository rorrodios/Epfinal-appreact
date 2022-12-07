const express = require('express');

const developerSchema = require('../models/developer');

const getDevs = async(req,res) => {
    const devs = await developerSchema.find();
    res.json (devs);
}

const addDev = async (req,res) => {
    const {name, img, description} = req.body;
    const newDev = new developerSchema ({
        name,
        img,
        description
    })
    
    try {
        await newDev.save().then(() => {res.json('Desarrollador agregado correctamente!')})
    } catch (error) {res.json((error))}
}

const removeDev = async (req, res) => {
    const developer = req.body;
    
    await developerSchema.findOneAndRemove({name: developer.name}).then(res.json("Usuario removido!")).catch((error) => {res.json(error)});
              
}

module.exports = {getDevs,addDev,removeDev};