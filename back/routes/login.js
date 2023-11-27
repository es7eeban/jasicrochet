var express = require("express");
var router = express.Router();

const users_controller = require("../controllers/loginController.js");
/**
 * Se obtiene el menú para el root y que este sea utilizado en toda la app
 */

router.get("/", users_controller.users);

module.exports = router;
