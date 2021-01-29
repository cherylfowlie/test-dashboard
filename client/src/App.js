import React from "react";
// import api from "./utils/API"
import { BrowserRouter as Router } from "react-router-dom";
import Nav from "./components/Nav";
import List from "./components/List"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <List />
      </div>
    </Router>
  );
}

export default App;
