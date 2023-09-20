import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/navbar";
import SignRegister from "./components/SignRegister/SignRegister"
export default function App() {
  return (
    <Router>
      <Navbar/>
      <SignRegister/>
    </Router>
      
  )
}