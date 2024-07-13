import { getCurrentToken } from "@/redux/features/authSlice";
import { useAppSelector } from "@/redux/hooks";
import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const token = useAppSelector(getCurrentToken);
  if (!token) {
    return <Navigate to={"/login"} replace />;
  }
  return <>{children}</>;
};

export default ProtectedRoute;
