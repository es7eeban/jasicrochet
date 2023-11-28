import { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
//import { PropTypes } from "prop-types";

const ProtectedRoute = () => {
  /**
   * estado true, para el boton entrar del sigin
   * si es false no entra
   */
  const [isAuth, setIsAuth] = useState(true);

  /**
   * Lógica del login
   */

  return isAuth ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
