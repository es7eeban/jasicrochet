const express = require("express");
var cors = require("cors");
const app = express();
var database = require("../back/database.json");

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//console.log(database.users); //ver que trae el json de BDD

//Get
app.get("/", (req, res) => {
  res.json(database.menu);
});

/**
 * Se obtienen todos los productos
 */
app.get("/products", (req, res) => {
  res.json(database.products);
  console.log(database.products);
});

/**
 * Se obtienen todos los productos por id
 */
app.get("/products/:id", (req, res) => {
  const idParam = parseInt(req.params.id);
  var productoItem = database.products.filter(
    (product) => product.id == idParam
  );
  res.json(productoItem);
});

/**
 * Puerto en el que corre el backend
 */
app.listen(3002, () => {
  console.log("app is running on port 3002");
});
