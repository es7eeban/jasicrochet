import { Link, NavLink } from "react-router-dom";
import jasicrochet from "../assets/jasicrochet.svg";
import { useState, useEffect } from "react";
import Loading from "../components/Loading";

const Navbar = () => {
  const [menuData, setMenudata] = useState([{}]);

  useEffect(() => {
    fetch("http://localhost:3002/")
      .then((response) => response.json())
      .then((response) => {
        setMenudata(response);
      });
  }, []);
  return (
    <nav className="fixed z-10 flex items-center justify-between w-full h-24 p-12 m-0 bg-violet-100">
      <Link to="/">
        <img src={jasicrochet} alt="" srcSet="" className="w-20" />
      </Link>
      <ul className="flex gap-5">
        <li>
          {typeof menuData === "undefined" ? (
            <Loading />
          ) : (
            menuData.map((menu, i) => (
              <NavLink
                to={"/" + menu.name}
                key={i}
                className="p-4 text-xl text-violet-600 hover:text-violet-900 hover:font-semibold"
              >
                {menu.name}
              </NavLink>
            ))
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
