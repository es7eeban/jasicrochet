import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import imagen from "../assets/producto1.svg";
import Loading from "../components/Loading";

const Detail = () => {
  const { id } = useParams(); //usamos el parametro de la url .../:id
  const [isLoading, setIsLoading] = useState(true); //elemento para
  const [productsData, setProductsdata] = useState([]);

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
        <>
          <Link
            to={{ pathname: "/products", keepSearch: true }}
            className="text-md"
          >
            Volver
          </Link>
          <section className="flex justify-around">
            <div key={id} className="flex flex-col items-center gap-5">
              <img src={imagen} alt="" srcSet="" className="h-48" />
              <p className="text-xl text-green-600">${item.price}</p>
            </div>
            <div className="flex flex-col gap-5 w-60">
              <h1 className="text-3xl capitalize ">{item.name}</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                quia, voluptatibus fugit laborum nostrum maiores animi
                repellendus possimus error, dolor voluptatum perferendis nisi.
                Nam praesentium mollitia eligendi. Consectetur, blanditiis
                nulla!
              </p>
              <button
                className="justify-center w-48 p-1 rounded-xl btn bg-cyan-500/75"
                onClick={() => console.log("btn")}
              >
                Solicitar
              </button>
            </div>
          </section>
        </>
      )}
    </div>
  );
};

export default Detail;
