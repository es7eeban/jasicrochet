import { Link } from "react-router-dom";
import logo from "../assets/JasiCrochet-Icon.svg";

const Home = () => {
  return (
    <div className="h-screen p-5 bg-home">
      <main className="flex flex-wrap items-center h-full gap-5 md:flex-row md:flex-nowrap">
        <section className="flex flex-col items-center justify-center h-full gap-4 ">
          <img src={logo} alt="" className="w-3/6" />
        </section>
        <section className="flex flex-col items-center justify-center h-full gap-10 p-10 ">
          <h1 className="text-6xl font-extrabold text-violet-500 drop-shadow-lg ">
            JASICROCHET
          </h1>
          <p className="w-full ">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero
            consequatur officia nobis temporibus fuga quaerat alias repudiandae,
            vero corrupti quo perferendis aliquid. Voluptate delectus aliquid
            maiores maxime quaerat, molestiae libero.
          </p>
          <Link to={"/productos"}>
            <button className="px-10 py-5 font-semibold tracking-widest text-white uppercase rounded-md btn bg-violet-500/75 hover:bg-violet-700">
              Ingresar
            </button>
          </Link>
        </section>
      </main>
    </div>
  );
};

export default Home;
