import React from "react";
import { Route } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import registration from "./pages/registration";
import Home from './pages/Home';
import Login from './pages/login'
import Dashboard from "./pages/Dashboard"
import './App.css';


const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Route exact path='/' component={Home} /> 
      <Route path="/registration" component={registration} />
      <Route path="/login" component={Login} />
      <Route path="/Dashboard" component={Dashboard} />
    </div>
  );
}

export default App;
