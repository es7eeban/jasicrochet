import { useState, useEffect } from "react";
import Card from "../components/Card";

const Products = () => {
  const [productsData, setProductsdata] = useState([{}]);

  useEffect(() => {
    fetch("http://localhost:3002/products")
      .then((response) => response.json())
      .then((response) => {
        setProductsdata(response);
      });
  }, []);

  //const [busqueda, setBusqueda] = useState();
  //let filtrado = [];
  //if (!busqueda) {
  //  filtrado = productsData;
  //}

  return (
    <div className="flex flex-col items-center m-5">
      <h2 className="text-3xl font-bold text-gray-900">Productos</h2>
      <div>
        <input
          type="search"
          id="search"
          className="block w-full p-4 pl-10 text-sm text-gray-900 bg-white border border-white rounded-lg focus:ring-white focus:border-blue-500 dark:bg-white dark:border-white dark:white dark:text-black dark:focus:ring-white dark:focus:border-white"
          placeholder="Search"
          //onChange={(e) => {
          //  setBusqueda(e.target.value);
          // }}
          required
        />
      </div>
      <p>{"busqueda"}</p>
      {console.log("filtrado")}
      <div className="grid grid-cols-2 gap-10 mt-5 md:grid-cols-4">
        {typeof productsData === "undefined" ? (
          <p>Loading...</p>
        ) : (
          productsData.map((product, i) => (
            <div key={i}>
              <Card id={product.id} name={product.name} price={product.price} />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Products;
