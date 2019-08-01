import React from "react";
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react'

import '../pages/home.css'

const Home = () => {
  return (
    <div className="home">
      <div className="h1">
        <h1>Welcome to <br/>Clinical Trial Finder</h1>
      </div>
      <div className="button">
        <Button fluid color='white'>
          <Link to="/login">Login</Link>
        </Button> <br/>
        <Button fluid color='white'>
          <Link to="/registration">Sign Up</Link>
        </Button>
        
      </div>
    </div>
  )
}

export default Home;
