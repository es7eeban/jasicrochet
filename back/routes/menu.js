var express = require("express");
var router = express.Router();
var database = require("../database.json");

/**
 * Se obtiene el menú para el root y que este sea utilizado en toda la app
 */
router.get("/", (_req, res) => {
  res.json(database.menu);
});

module.exports = router;
