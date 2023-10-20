import { Link, Outlet } from "react-router-dom";
import jasicrochet from "../assets/jasicrochet.svg";
import { useState, useEffect } from "react";
import Loading from "../components/Loading";
const Root = () => {
  const fecha = new Date();
  const [menuData, setMenudata] = useState([{}]);

  useEffect(() => {
    fetch("http://localhost:3002/")
      .then((response) => response.json())
      .then((response) => {
        setMenudata(response);
      });
  }, []);
  return (
    <div>
      <div className="flex items-center justify-between w-full p-12 bg-white h-28 ">
        <Link to="/home">
          <img src={jasicrochet} alt="" srcSet="" className="w-20" />
        </Link>
        <div id="sidebar">
          <nav>
            <ul className="flex gap-5">
              <li>
                {typeof menuData === "undefined" ? (
                  <Loading />
                ) : (
                  menuData.map((menu, i) => (
                    <Link
                      to={"/" + menu.name}
                      key={i}
                      className="p-4 text-2xl text-black"
                    >
                      {menu.name}
                    </Link>
                  ))
                )}
              </li>
            </ul>
          </nav>
        </div>
        <span className="pr-5 text-xl text-black">
          {fecha.toLocaleDateString()}
        </span>
      </div>
      <div className="m-12 ">
        <Outlet />
      </div>
    </div>
  );
};

export default Root;
