import { useState, useEffect } from "react";
import Card from "../components/Card";

const Products = () => {
  const [productsData, setProductsdata] = useState([{}]);

  useEffect(() => {
    fetch("http://localhost:3002/home")
      .then((response) => response.json())
      .then((response) => {
        setProductsdata(response);
      });
  }, []);
  return (
    <div className="flex flex-col items-center m-5">
      <h2 className="text-3xl font-bold text-gray-900">Productos</h2>

      <div className="grid grid-cols-2 gap-10 mt-5 md:grid-cols-4">
        {typeof productsData.products === "undefined" ? (
          <p>Loading...</p>
        ) : (
          productsData.products.map((product, i) => (
            <div key={i}>
              <Card name={product.name} price={product.price} />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Products;

/*{ <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Nombre</th>
              <th>Precio</th>
              <th>Ver</th>
            </tr>
          </thead>
          <tbody>
            {typeof productsData.products === "undefined" ? (
              <p>Loading...</p>
            ) : (
              productsData.products.map((product, i) => (
                <tr key={i} className="">
                  <td>{product.id}</td>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td>
                    <button className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                      ver
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table> }*/
