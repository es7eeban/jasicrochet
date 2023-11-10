import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <h2 className="text-3xl font-bold text-center text-violet-900">Home</h2>
      <main className="mt-10 text-center">
        <section>{/* Carousel de imagenes */}</section>

        <Link to={"/productos"}>
          <button className="w-2/5 py-5 font-semibold tracking-widest text-white uppercase rounded-md btn bg-violet-500/75 hover:bg-violet-700">
            Ver Productos
          </button>
        </Link>
      </main>
    </>
  );
};

export default Home;
