import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const ProductsAdmin = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [productsData, setProductsdata] = useState([]);

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

  return (
    <>
      <div className="flex flex-col items-center justify-center w-9/12 gap-10 p-10 text-center">
        <div className="w-full">
          <Link to="/create" className="">
            <button className="w-full py-2 rounded-2xl bg-violet-700">
              Add
            </button>
          </Link>
        </div>
        <table className="items-center w-full p-3">
          <thead className="p-3 bg-violet-300">
            <tr>
              <th>Name</th>
              <th>Pice</th>
              <th>stock</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {productsData.map((product, i) => {
              return (
                <tr key={i} className="bg-violet-200 ">
                  <td className="px-4 py-2">{product.name}</td>
                  <td className="px-4 py-2">{product.price}</td>
                  <td className="px-4 py-2">{product.stock}</td>
                  <td className="px-4 py-2">
                    <Link to={`/update/${product._id}`}>
                      <button className="w-1/3 p-1 rounded-md bg-violet-500">
                        Edit
                      </button>
                    </Link>
                    <button
                      onClick={() => {
                        //deleteUser(user._id);
                        console.log(product._id);
                      }}
                      className="w-1/3 p-1 bg-red-500 rounded-md "
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ProductsAdmin;
