import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App";
// import { BrowserRouter } from "react-router-dom";
import Theme from "./components/Theme/Theme";
import { Provider } from "react-redux";
import store from "./redux/store";
import { HashRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Theme>
          <App />
        </Theme>
      </Router>
    </Provider>
  </React.StrictMode>
);
