const express = require("express");
var cors = require("cors");
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const database = {
  users: [
    {
      id: "123",
      name: "John",
      email: "john@gmail.com",
      password: "cookies",
      entries: 0,
      joined: new Date(),
    },
    {
      id: "124",
      name: "Tom",
      email: "Tom@gmail.com",
      password: "apple",
      entries: 0,
      joined: new Date(),
    },
  ],
  menu: [
    {
      id: 0,
      name: "Home",
    },
    {
      id: 1,
      name: "Products",
    },
    {
      id: 2,
      name: "Contact",
    },
  ],
  products: [
    {
      id: 0,
      name: "producto1",
      price: "40",
    },
    {
      id: 1,
      name: "Producto 2",
      price: "40",
    },
    {
      id: 2,
      name: "Producto 3",
      price: "40",
    },
    {
      id: 3,
      name: "Producto 4",
      price: "40",
    },
  ],
};

app.get("/home", (req, res) => {
  res.json(database);
});

app.get("/products", (req, res) => {
  res.json(database.products);
});

app.get("/products/:id", (req, res) => {
  res.json(database.products);
  console.log(database.products[id]);
});

app.listen(3002, () => {
  console.log("app is running on port 3002");
});
