import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Archived from "./components/Archive.jsx";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Router>
      <Routes>
        <Route path= "/Portfolio" element ={<App />}/>
        <Route path= "/archive" element ={<Archived />}/>
      </Routes>
    </Router>
  </>
);
