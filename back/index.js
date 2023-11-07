var express = require("express");
var cors = require("cors");

/**
 * app
 */
const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

/**
 * Importar rutas --> rutaimportada
 */
var products = require("./routes/products.js");
var menu = require("./routes/menu.js");

/**
 * Routes
 * .use("/ruta", rutaimportada)
 */
app.use("/", menu);
app.use("/products", products);

/**
 * Puerto en el que corre el backend
 */
app.listen(3002, () => {
  console.log("app is running on port 3002");
});
