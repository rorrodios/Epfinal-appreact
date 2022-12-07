const express = require ('express');
const router = express.Router();

const {createUser,giveAdmin,removeAdmin,removeUser,getUsers} = require('../controllers/users.controllers');
const {verifyToken,isAdmin} = require('../middlewares/authtoken.middleware');

router.get("/getall",[verifyToken,isAdmin],getUsers);
router.post("/createUser",[verifyToken,isAdmin],createUser);
router.patch("/removeadmin",[verifyToken,isAdmin],removeAdmin);
router.patch("/giveadmin",[verifyToken,isAdmin],giveAdmin);
router.delete("/removeuser",[verifyToken,isAdmin],removeUser);


module.exports = router;