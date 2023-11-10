import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import imagen from "../assets/lilo.jpg";
import BackButton from "../components/BackButton";
import Loading from "../components/Loading";

const Detail = () => {
  const { id } = useParams(); //usamos el parametro de la url .../:id
  const [isLoading, setIsLoading] = useState(true); //elemento para
  const [productsData, setProductsdata] = useState([]);

  useEffect(() => {
    isLoading
      ? fetch(`http://localhost:3002/productos/${id}`)
          .then((response) => response.json())
          .then((response) => {
            setProductsdata(response);
            setIsLoading(false);
          })
      : console.log("Fin carga");
  });

  const item = productsData[0];

  return (
    <div className="flex flex-col ">
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <BackButton rute={"productos"} />
          <section className="grid h-full gap-12 mt-5 grid-row md:grid-cols-2 pb-11">
            <div className="flex flex-col items-center w-full md:items-end">
              {/**
               * Falta crear el carousel de imagenes o algo que muestre
               * varias imagenes
               */}
              <img
                src={imagen}
                alt=""
                srcSet=""
                className="w-9/12 md:w-6/12 sm:w-3/5"
              />
            </div>
            <div className="flex flex-col w-5/6 gap-5 pt-10 justify-self-center md:w-3/6">
              <p className="w-1/2 p-0.5 text-center bg-violet-300 rounded-sm">
                {item.active == 1 ? "Disponible" : "No disponible"}
              </p>
              <h1 className="text-3xl font-semibold uppercase ">{item.name}</h1>
              <p className="text-justify ">{item.detail}</p>
              <p className="text-xl text-green-600">${item.price}</p>
              <button
                className="justify-center w-full p-1 font-semibold tracking-widest text-white rounded-md btn bg-violet-500/75 hover:bg-violet-700"
                onClick={() =>
                  /**
                   * Se debe crear la funcionalidad para comunicarse por Wsp
                   */
                  console.log("btn")
                }
              >
                Solicitar
              </button>
            </div>
          </section>
          <section>
            {/**
             * Se puede crear algo para dejar comentarios o algo
             */}
          </section>
        </>
      )}
    </div>
  );
};

export default Detail;
