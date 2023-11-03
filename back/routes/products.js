var express = require("express");
var router = express.Router();

/**
 * Importación del controlador de products
 */
const products_controller = require("../controllers/productsController.js");

/**
 * Se obtienen todos los productos
 */
router.get("/", products_controller.productos);

/**
 * Se obtienen todos los productos por id
 */
router.get("/:id", products_controller.productos.id);

module.exports = router;
