import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../store/actions/index";
import { Grid, Form } from "semantic-ui-react";

import "../pages/login.css";

const Login = props => {
  const [input, setInput] = useState({
    username: "",
    password: ""
  });

  const inputHandler = e => {
    //console.log("target name", e.target.name);
    //console.log("value", e.target.value);
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const submitHandler = e => {
    e.preventDefault();
    props.login(props.history, input);
    setInput({
      username: "",
      password: ""
    });
  };
  return (
    <Grid
      textAlign="center"
      style={{ height: "100vh " }}
      verticalAlign="middle"
    >
      <Grid.Column style={{ maxWidth: 450 }}>
        <Form onSubmit={submitHandler}>
          <h2>Sign In</h2>
          <Form.Field>
            <label htmlFor="Username">Username</label>
            <input
              type="text"
              value={input.username}
              onChange={inputHandler}
              name="username"
              placeholder="Username"
            />
          </Form.Field>
          <Form.Field>
            <label htmlFor="Password">Password</label>
            <input
              type="text"
              value={input.password}
              onChange={inputHandler}
              name="password"
              placeholder="Password"
            />
          </Form.Field>
          <Form.Button color="black" type="submit">
            Submit
          </Form.Button>
          <p>
            Don't have an account? <Link to="/registration">Register</Link>
          </p>
        </Form>
      </Grid.Column>
    </Grid>
  );
};

const mapStateToProps = state => ({
  isLoggingIn: state.isLoggingIn,
  error: state.error
});

export default withRouter(connect(
  mapStateToProps,
  { login }
)(Login));
