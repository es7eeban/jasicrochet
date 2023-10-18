import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import imagen from "../assets/producto1.svg";
const Detail = () => {
  const [productsData, setProductsdata] = useState([{}]);
  const { id } = useParams(); //usamos el parametro de la url .../:id
  useEffect(() => {
    fetch("http://localhost:3002/products/:id")
      .then((response) => response.json())
      .then((response) => {
        setProductsdata(response);
        console.log(response);
      });
  }, []);

  var arr = productsData.filter((product) => product.id == id);
  /**para ver que trae product data en el filtro
   * console.log(arr);
   */

  return (
    <div className="flex flex-col">
      {arr.map((product) => (
        <div key={product.id} className="flex flex-col items-center gap-5">
          <h1 className="text-3xl">{product.name}</h1>
          <img src={imagen} alt="" srcSet="" className="h-48" />
          <p className="text-xl text-green-600">${product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Detail;
