import { useState, useEffect } from "react";
import Listcard from "../components/Listcards";
import Loading from "../components/Loading";

const Products = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [productsData, setProductsdata] = useState([]);
  const [busqueda, setBusqueda] = useState();

  useEffect(() => {
    isLoading
      ? fetch("http://localhost:3002/productos")
          .then((response) => response.json())
          .then((response) => {
            setProductsdata(response);
            setIsLoading(false);
          })
      : console.log("BDD --> Carga de productos finalizada");
  });

  var productsFilter = []; //array para guardar las coincidencias del filtro
  if (!busqueda) {
    productsFilter = productsData;
  } else {
    productsData.filter((product) => {
      if (product.name.toUpperCase().includes(busqueda.toUpperCase())) {
        return productsFilter.push(product);
      }
    });
  }

  return (
    <>
      <div className="flex flex-col items-center m-5">
        <h2 className="text-3xl font-bold text-violet-900">
          Lista de Productos
        </h2>

        {isLoading ? (
          <Loading />
        ) : (
          <>
            <input
              type="search"
              id="search"
              className="block w-6/12 p-4 pl-10 mt-6 text-sm bg-white border rounded-lg outline-none border-violet-600 text-violet-900 focus:ring-violet-900 focus:border-violet-500 "
              placeholder="Buscar"
              onChange={(e) => {
                setBusqueda(e.target.value);
              }}
              required
            />
            <div className="flex flex-wrap justify-center gap-5 mt-5">
              <Listcard productsData={productsFilter} />
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Products;
