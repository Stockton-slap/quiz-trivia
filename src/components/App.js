import { Routes, Route } from "react-router-dom";

import SharedLayout from "./SharedLayout/SharedLayout";
import Register from "../pages/Register";
import LogIn from "../pages/LogIn";
import Home from "../pages/Home";
import img from "../images/quiz.png";
import PublicRoute from "./PublicRoute/PublicRoute";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Quiz from "../pages/Quiz";
import Toaster from "./Toaster/Toaster";

function App() {
  return (
    <div
      style={{
        backgroundImage: `url(${img})`,
        height: "100vh",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route
            index
            element={
              <PublicRoute restricted>
                <Home />
              </PublicRoute>
            }
          />

          <Route
            path="/register"
            element={
              <PublicRoute restricted>
                <Register />
              </PublicRoute>
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute restricted>
                <LogIn />
              </PublicRoute>
            }
          />
          <Route
            path="/quiz"
            element={
              <PrivateRoute>
                <Quiz />
              </PrivateRoute>
            }
          />
        </Route>
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
