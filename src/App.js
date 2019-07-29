import React from 'react';
import Login from './pages/login'
import NavBar from './components/NavBar';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Login />
    </div>
  );
}

export default App;
