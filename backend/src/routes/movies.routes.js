const express = require ('express');
const router = express.Router();
const authtoken = require('../middlewares/authtoken.middleware')
const {addMovie, deleteMovie, getMovies } = require('../controllers/movies.controllers');

router.get("/getall",[authtoken.verifyToken],getMovies);
router.post("/add",[authtoken.verifyToken,authtoken.isAdmin],addMovie);
router.delete("/delete/:id",[authtoken.verifyToken,authtoken.isAdmin],deleteMovie);


module.exports = router;