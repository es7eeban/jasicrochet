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
  return (
    <div className="flex flex-col items-center m-5">
      <h2 className="text-3xl font-bold text-gray-900">Productos</h2>

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
