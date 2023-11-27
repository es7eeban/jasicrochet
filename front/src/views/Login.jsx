import { useState, useEffect } from "react";
import Signin from "../components/Signin";

function Login() {
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [usersData, setUsersdata] = useState([]);
  const handleOnClose = () => setShowModal(false);

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

  return (
    <>
      {console.log(usersData)}
      <div>
        <h1 className="text-2xl font-extrabold ">Login</h1>
        <button onClick={() => setShowModal(true)}>
          <p>Entrar</p>
        </button>
      </div>
      <Signin onClose={handleOnClose} visible={showModal} />
    </>
  );
}

export default Login;
