import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Registration from "./pages/registration";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route to="/registration" component={Registration} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
