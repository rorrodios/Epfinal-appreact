const express = require ('express');
const router = express.Router();

const {addDev,getDevs,removeDev} = require('../controllers/devs.controllers');
const {verifyToken,isAdmin} = require('../middlewares/authtoken.middleware');

router.get("/getall",[verifyToken],getDevs);
router.post("/createdev",[verifyToken,isAdmin],addDev);
router.delete("/removedev",[verifyToken,isAdmin],removeDev);


module.exports = router;