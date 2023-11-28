import { useState, useEffect } from "react";
import logo from "../assets/JasiCrochet-Icon.svg";
import { useNavigate } from "react-router-dom";

function Login() {
  const [isLoading, setIsLoading] = useState(true);
  const [usersData, setUsersdata] = useState([]);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    isLoading
      ? fetch("http://localhost:3002/login")
          .then((response) => response.json())
          .then((response) => {
            setUsersdata(response);
            setIsLoading(false);
          })
      : console.log("BDD --> Carga de usuarios finalizada");
  });

  const Login = (e) => {
    e.preventDefault();
    if (usersData[0].name == name && usersData[0].password == password) {
      navigate("/admin");
    } else {
      console.log("error");
    }
  };

  return (
    <>
      <div className="h-screen p-5 bg-home">
        <main className="flex flex-wrap items-center h-full gap-5 md:flex-row md:flex-nowrap">
          <section className="flex flex-col items-center justify-center w-6/12 h-full gap-4">
            <img src={logo} alt="" className="w-6/12" />
          </section>
          <section className="flex flex-col items-center justify-center w-6/12 h-full gap-10 p-10">
            {console.log(usersData)}

            <div className="w-10/12 bg-white rounded-lg p-11">
              <div className="flex items-center justify-center ">
                <h2 className="text-3xl font-extrabold">Ingreso</h2>
              </div>
              <form className="flex flex-col gap-6 mt-5">
                <label className="block">
                  <span className="block text-2xl font-medium text-slate-700">
                    Email
                  </span>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    className="block w-full px-3 py-2 mt-1 bg-white border rounded-md shadow-sm text-md border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                  />
                </label>
                <label className="block">
                  <span className="block text-2xl font-medium text-slate-700">
                    Contraseña
                  </span>
                  <input
                    type="password"
                    name="Password"
                    id="Password"
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    className="block w-full px-3 py-2 mt-1 bg-white border rounded-md shadow-sm text-md border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                  />
                </label>
              </form>
              <div className="flex justify-around gap-4 mt-5">
                <button
                  type="submit"
                  className="flex justify-center w-48 p-1 text-white bg-green-500 rounded-lg"
                  onClick={Login}
                >
                  Entrar
                </button>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

export default Login;
