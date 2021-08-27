import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Events from "./components/Events";
import Footer from "./components/Footer";
import History from "./components/History";
import Navbar from "./components/Navbar";
import PhotoSection from "./components/PhotoSection";
import Teams from "./components/Teams";

function App() {
  return (
    <>
      <Router>
        {/* <Navbar />
        <PhotoSection /> */}
        {/* <Events /> */}
        <History />
        <Teams />
      </Router>
      <Footer />
    </>
  );
}

export default App;
