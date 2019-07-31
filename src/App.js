import React from "react";
import { Route } from "react-router-dom";
import PrivateRoute from "./utilities/PrivateRoute";
import Navbar from "./components/Navbar/Navbar";
import registration from "./pages/registration";
import Home from "./pages/Home";
import Login from "./pages/login";
import Dashboard from "./pages/Dashboard";
import Watchlist from './pages/Watchlist';

import "./App.css";

const App = () => {
  
  return (
    <div className="App">
      <Navbar />
      <div className="App-content">
        <Route exact path="/" component={Home} />
        <Route path="/registration" component={registration} />
        <Route path="/login" component={Login} />
        <PrivateRoute path="/Dashboard" component={Dashboard} />
        <PrivateRoute path='/watchlist' component={Watchlist} />
      </div>
    </div>
  );
};

export default App;
