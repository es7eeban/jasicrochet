const database = require("../database.json");

/**
 * Se obtienen todos los productos
 */
exports.users = async (_req, res, next) => {
  try {
    res.json(database.users);
  } catch (error) {
    return next(error);
  }
};
