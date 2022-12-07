const express = require('express');
const { rawListeners } = require('../models/user');
const userSchema = require('../models/user');

const createUser = async (req, res) => {
    try {
        const {mail, password, rol} = req.body;
        console.log({mail,password,rol})
        const newUser = new userSchema({
            mail,
            password,
            rol
        });
        await newUser.save().then(() =>{res.json("Usuario guardado con exito!")});
    } catch (error) {res.json('errororoororor');}


}

const giveAdmin = async(req,res) => {
    const user = await userSchema.findOneAndUpdate({mail:req.body.mail},{rol:'admin'}).then(() => res.json("usuario modoficado!"));

}

const removeAdmin = async(req,res) => {
    const user = await userSchema.findOneAndUpdate({mail:req.body.mail},{rol:'user'}).then(() => res.json("usuario modoficado!"));
}

const removeUser = async (req, res) => {
    const user = req.body;
    console.log(user.mail);
    await userSchema.findOneAndRemove({mail: user.mail}).then(res.json("Usuario removido!")).catch((error) => {res.json(error)});
              
}

const getUsers = async(req,res) =>{
    
    const users = await userSchema.find();
    res.json(users);
    
}

module.exports = {removeAdmin,giveAdmin,createUser,removeUser,getUsers};