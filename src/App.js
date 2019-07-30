import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Registration from "./pages/registration";
import Login from './pages/login'
import './App.css';


const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Login />
      <Route to="/registration" component={Registration} />
    </div>
  );
}

export default App;
