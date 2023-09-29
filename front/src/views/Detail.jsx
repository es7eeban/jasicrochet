import { useState, useEffect } from "react";
import { PropTypes } from "prop-types";
const Detail = (props) => {
  const [productsData, setProductsdata] = useState([{}]);

  useEffect(() => {
    fetch("http://localhost:3002/products/")
      .then((response) => response.json())
      .then((response) => {
        setProductsdata(response);
        console.log(productsData);
      });
  });
  console.log(productsData);
  return (
    <>
      {productsData
        .filter((product) => {
          product.id == props.id ? (
            <div key={product.id}>
              <h1>{product.name}</h1>
            </div>
          ) : (
            <h1>Error</h1>
          );
        })
        .map((product) => {
          product.id == props.id ? (
            <div key={product.id}>
              <h1>{product.name}</h1>
            </div>
          ) : (
            <h1>Error</h1>
          );
        })}
    </>
  );
};
//algo hay que cambiar aca arriba
Detail.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default Detail;
