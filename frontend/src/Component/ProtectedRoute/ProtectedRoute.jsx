import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ isLoggedIn, children }) => {
  if (isLoggedIn) {
    return children;
  }
  return <Navigate to="/login" replace />;
};

export default ProtectedRoute;
