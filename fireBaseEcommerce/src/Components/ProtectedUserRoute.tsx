import { PropsWithChildren } from "react";
import { Navigate } from "react-router";
import { useAuth } from "../Hooks/useAuth";

const ProtectedRoute = ({ children }: PropsWithChildren) => {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? children : <Navigate to="/" />;
  // todo kivaber Toast message dewa jabe abong success hole TOAST message dewa jabe kivade
};

export default ProtectedRoute;
