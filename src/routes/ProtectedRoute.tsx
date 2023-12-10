/* eslint-disable @typescript-eslint/no-explicit-any */
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }: any) => {
  const isSignedIn = localStorage.getItem('isSignedIn');

  if (!isSignedIn) {
    return <Navigate to="/auth/login" />;
  }
  return children;
};

export default ProtectedRoute;