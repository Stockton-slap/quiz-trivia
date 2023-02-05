import { Routes, Route } from "react-router-dom";

import SharedLayout from "./SharedLayout/SharedLayout";
import Register from "../pages/Register";
import LogIn from "../pages/LogIn";
import img from "../images/quiz.png";

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
          <Route index />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<LogIn />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
