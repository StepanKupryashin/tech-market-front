/* eslint-disable @typescript-eslint/no-explicit-any */
import { Navigate } from "react-router-dom";
import useUserStore from "../stores/user";

const ProtectedRoute = ({ children }: any) => {
  const isSignedIn = useUserStore((state: any) => state.isSignedIn());


  if (!isSignedIn) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default ProtectedRoute;