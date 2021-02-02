import React from "react";
// import api from "./utils/API"
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navigation from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        <Navigation />


      </div>
    </Router>
  );
}

export default App;
