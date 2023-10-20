import { useState, useEffect } from "react";
import Listcard from "../components/Listcards";
import Loading from "../components/Loading";

const Products = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [productsData, setProductsdata] = useState([]);

  useEffect(() => {
    isLoading
      ? fetch("http://localhost:3002/products")
          .then((response) => response.json())
          .then((response) => {
            setProductsdata(response);
            setIsLoading(false);
          })
      : console.log("fin carga");
  });

  //const [busqueda, setBusqueda] = useState();
  //let filtrado = [];
  //if (!busqueda) {
  //  filtrado = productsData;
  //}

  return (
    <>
      <div className="flex flex-col items-center m-5">
        <h2 className="text-3xl font-bold text-gray-900">Productos</h2>

        {isLoading ? (
          <Loading />
        ) : (
          <>
            <input
              type="search"
              id="search"
              className="block w-full p-4 pl-10 mt-6 text-sm text-gray-900 bg-white border border-white rounded-lg focus:ring-white focus:border-blue-500 dark:bg-white dark:border-white dark:white dark:text-black dark:focus:ring-white dark:focus:border-white"
              placeholder="Buscar"
              //onChange={(e) => {
              //  setBusqueda(e.target.value);
              // }}
              required
            />
            <div className="grid grid-cols-2 gap-10 mt-5 md:grid-cols-4">
              <Listcard productsData={productsData} />
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Products;
