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
var login = require("./routes/login.js");

/**
 * Routes
 * .use("/ruta", rutaimportada)
 */
app.use("/", menu);
app.use("/productos", products);

app.use("/login", login);

/**
 * Puerto en el que corre el backend
 */
app.listen(3002, () => {
  console.log("app is running on port 3002");
});
