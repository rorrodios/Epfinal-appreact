const express = require('express');
const jwt = require('jsonwebtoken');
const userSchema = require('../models/user');
  
  const signup = async(req, res) => { 
    try {
      // checking for roles
      const { mail, password, confirmPassword, roles  } = req.body;
      const userFound = await userSchema.findOne({mail});
      if (userFound)
        return res.json({message : 'Mail en uso!'});

      if (password != confirmPassword)
        return (res.json({message : 'Las contrasenas no coinciden !'}));
      
      // Creating a new User Object
      const newUser = new userSchema({
        mail,
        password,
      });
      
      if (roles) {       
        newUser.rol = roles;
      } else {
        
        newUser.rol ='user';
      }
      
      // Saving the User Object in Mongodb

      const savedUser = await newUser.save();
      
      // Create a token
      const token = jwt.sign({ id: savedUser._id }, 'hola123', {
        expiresIn: 86400, // 24 hours
      });
      console.log(savedUser);

      return res.status(200).json('Usuario Guardado correctamente!' + token);
        
      } catch (error) {return res.status(200).json(error.message);}
    }



    const login = async (req, res) => {
      try {
        // Request body email can be an email or username
        const userFound = await userSchema.findOne({ mail: req.body.mail })
    
        if (!userFound)
          return res.status(400).json({ message: "No se ha encontrado ese correo!" });
    
        const matchPassword = await userSchema.comparePassword(
          req.body.password,
          userFound.password
        );
    
        if (!matchPassword)
          return res.status(401).json({
            token: null,
            message: "Contrase;a Incorrecta!",
          });
    
        const token = jwt.sign({ id: userFound._id }, 'hola123', {
          expiresIn: 86400, // 24 hours
        });
    
        res.json({ token });
      } catch (error) {console.log(error);}
    };


module.exports = {signup,login};