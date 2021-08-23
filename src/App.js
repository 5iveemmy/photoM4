import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Events from "./components/Events";
import Navbar from "./components/Navbar";
import PhotoSection from "./components/PhotoSection";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <PhotoSection />
        <Events />
      </Router>
    </>
  );
}

export default App;
