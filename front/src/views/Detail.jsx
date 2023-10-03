import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
const Detail = () => {
  const [productsData, setProductsdata] = useState([{}]);
  const { id } = useParams();
  //let id = props.state.id;
  useEffect(() => {
    fetch("http://localhost:3002/products/")
      .then((response) => response.json())
      .then((response) => {
        setProductsdata(response);
      });
  }, []);

  let arr = {};
  return (
    <>
      <h2>detail</h2>
      {console.log("  -------" + id)}
      {productsData.filter((product) => {
        product.id == id ? (arr = product) : console.log("error");
      })}
      <h1>{arr.id}</h1>
      <h2>{arr.name}</h2>
    </>
  );
};
//algo hay que cambiar aca arriba

export default Detail;

/**
 *.map((product) => {
          product.id == id ? (
            <div key={product.id}>
              <h1>{product.name}</h1>
            </div>
          ) : (
            <h1>Error</h1>
          );
          {
            console.log("return " + product.id);
          }
        })
        
        {productsData.id == id ? (
        <div key={productsData.id}>
          <h1>{productsData.name}</h1>
        </div>
      ) : (
        <h1>Error</h1>
      )}


      .map((product) => {
          product.id == id ? (
            <div key={productsData.id}>
              <h1>{productsData.name}</h1>
            </div>
          ) : (
            <h1>Error</h1>
          );
        })
 */
