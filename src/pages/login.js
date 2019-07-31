import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../store/actions/index";
import {
  Button,
  Card,
  Header,
  Grid,
  Form,
  Message,
  CardContent
} from "semantic-ui-react";

// import "../pages/login.css";
import styles from "./Login.module.scss";

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
    props.login(input);
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
                  type="text"
                  value={input.password}
                  onChange={inputHandler}
                  name="password"
                  placeholder="Password"
                />
              </Form.Field>
              <Button className={styles.buttons} type="submit">
                Submit
              </Button>

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
  error: state.error
});

export default connect(
  mapStateToProps,
  { login }
)(Login);
