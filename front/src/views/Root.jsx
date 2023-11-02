import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
const Root = () => {
  return (
    <>
      <div className="h-screen">
        <Navbar />
        <main className="pt-28">
          <Outlet />
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Root;
