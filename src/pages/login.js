import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../store/actions/index";

import { Button, Card, Header, Grid, Form, Message, Loader } from "semantic-ui-react";

// import "../pages/login.css";
import styles from "./Login.module.scss";

const Login = props => {
  let token = localStorage.getItem('token');
  if (token) {
    props.history.push('/Dashboard')
  } 

  const [input, setInput] = useState({
    username: "",
    password: ""
  });

  const inputHandler = e => {
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
    <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 400 }}>
        <Card className={styles.loginCard}>
          <Card.Content className={styles.headerContainer}>
            <Header as="h1" className={styles.header}>
              Sign In
            </Header>
          </Card.Content>
          <Card.Content>
            {props.isRegistered && 
              (<Message color="green">
                <Message.Header>Registration success</Message.Header>
                <p>Please sign in with your credentials</p>
              </Message>)}
            <Form onSubmit={submitHandler} className={styles.loginForm}>
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
                  type="password"
                  value={input.password}
                  onChange={inputHandler}
                  name="password"
                  placeholder="Password"
                />
              </Form.Field>
              {props.error && 
              (<Message color="red">
                <Message.Header>Sign in error</Message.Header>
                <p>{props.error}</p>
              </Message>)}
              <Button className={styles.buttons} type="submit">
                Submit
              </Button>
              {props.isLoggingIn && <Loader active inline='centered'>Signing In</Loader>}
              <Message>
                Don't have an account? <Link to="/registration">Register</Link>
              </Message>
            </Form>
          </Card.Content>
        </Card>
      </Grid.Column>
    </Grid>
  );
};

const mapStateToProps = state => ({
  isLoggingIn: state.isLoggingIn,
  isRegistered: state.isRegistered,
  error: state.error
});

export default withRouter(
  connect(
    mapStateToProps,
    { login }
  )(Login)
);
