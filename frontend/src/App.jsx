import AuthContainer from "./Component/Login/AuthContainer";
import ProtectedRoute from "./Component/ProtectedRoute/ProtectedRoute";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import axios from "./utils/axiosConfig.js";
function App() {
  useEffect(() => {
    axios.get("/auth/isLoggedIn").then((response) => {
      console.log(response.data);
    });
  }, []);
  const isLoggedIn = false;
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>HOME</ProtectedRoute>
          }
        />
        <Route path="/login" element={<AuthContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
