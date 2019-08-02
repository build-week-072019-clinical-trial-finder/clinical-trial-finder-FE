import React from "react";
import { Link, withRouter } from "react-router-dom";
import { Button } from "semantic-ui-react";

import "../pages/home.css";

const Home = props => {
  let token = localStorage.getItem("token");
  if (token) {
    props.history.push("/Dashboard");
  }

  return (
    <div className="home">
      <div className="h1">
        <h1>
          Welcome to <br />
          Clinical Trial Finder
        </h1>
      </div>
      <div className="button">
        <Link to="/login">
          <Button fluid color="white">
            Log in
          </Button>{" "}
        </Link>

        <br />
        <Link to="/registration">
          <Button fluid color="white">
            Register
          </Button>{" "}
        </Link>
      </div>
    </div>
  );
};

export default withRouter(Home);
