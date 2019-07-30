import React from "react";
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <div>
        <Link to="/login">Login</Link>
      </div>
      <div>
        <Link to="/registration">Sign Up</Link>
      </div>
    </div>
  )
}

export default Home;
