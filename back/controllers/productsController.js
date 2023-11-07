const database = require("../database.json");

/**
 * Se obtienen todos los productos
 */
exports.productos = async (_req, res, next) => {
  try {
    res.json(database.products);
  } catch (error) {
    return next(error);
  }
};

/**
 * Se obtienen todos los productos por su id
 */
exports.productos.id = async (req, res, next) => {
  try {
    const idParam = parseInt(req.params.id);
    var productoItem = database.products.filter(
      (product) => product.id == idParam
    );
    res.json(productoItem);
  } catch (error) {
    return next(error);
  }
};
