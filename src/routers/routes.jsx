import { Route, Routes } from "react-router-dom";
import { Configuraciones, Home, Login, ProtectedRoute } from "../index";
import { Layout } from "../hooks/Layout";

export function MyRoutes() {
  return (
    <Routes>
      <Route
        path="/login"
        element={
          <ProtectedRoute accesby="non-authenticated">
            <Login></Login>
          </ProtectedRoute>
        }
      />
      <Route
        path="/"
        element={
          <ProtectedRoute accesby="authenticated">
            <Layout>
              <Home></Home>
            </Layout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/configuracion"
        element={
          <ProtectedRoute accesby="authenticated">
            <Layout>
              <Configuraciones></Configuraciones>
            </Layout>
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}
