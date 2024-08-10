/* eslint-disable react/prop-types */
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user } = useContext(AuthContext);

  const navigate = useNavigate();

  if (!user?.email) {
    navigate("/");
  }

  return children;
};

export default PrivateRoute;
