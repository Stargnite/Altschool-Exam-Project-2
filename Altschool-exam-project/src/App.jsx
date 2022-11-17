import React from "react";
import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/NavBar";
import Navigation from "./components/Navigation/Navigation";
import ErrorBoundary from "./ErrorBoundary";

function App() {
  return (
    <ErrorBoundary>
      <Navbar />
      <Navigation />
    </ErrorBoundary>
  );
}

export default App;
