import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import imagen from "../assets/producto1.svg";
import Loading from "../components/Loading";
const Detail = () => {
  const { id } = useParams(); //usamos el parametro de la url .../:id
  const [isLoading, setIsLoading] = useState(true);
  const [productsData, setProductsdata] = useState([{}]);

  useEffect(() => {
    isLoading
      ? fetch(`http://localhost:3002/products/${id}`)
          .then((response) => response.json())
          .then((response) => {
            setProductsdata(response);
            setIsLoading(false);
          })
      : console.log("Fin carga");
  });

  const item = productsData[0];

  return (
    <div className="flex flex-col">
      {isLoading ? (
        <Loading />
      ) : (
        <div key={id} className="flex flex-col items-center gap-5">
          <h1 className="text-3xl">{item.name}</h1>
          <img src={imagen} alt="" srcSet="" className="h-48" />
          <p className="text-xl text-green-600">${item.price}</p>
        </div>
      )}
    </div>
  );
};

export default Detail;
