const express = require('express');
require("dotenv").config();

const authRoute = require('./routes/auth.routes');
const movieRoute = require('./routes/movies.routes');
const usersRoute = require('./routes/users.routes');
const devRoute = require('./routes/devs.routes');
const cors = require('cors');

const app = express();
const port = 4000;

//middleware
app.use(cors());
app.use(express.json());
app.use('/api/auth', authRoute);
app.use('/api/movies', movieRoute);
app.use('/api/users', usersRoute);
app.use('/api/dev', devRoute);

//routes
app.get("/", (req,res) =>{
    res.send('Hola mundo');
})

//conection to mongoDB
const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://DBadmin:pk364dPalk830MbA@dbreactvdeos.qvcmewh.mongodb.net/?retryWrites=true&w=majority").then(() => console.log('Conectado a la base de datos')).catch((error) => console.log(error));

app.listen(port, ()=> {
    console.log('Server activo en puerto:', port)
});
