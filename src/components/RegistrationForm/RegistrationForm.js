import React, { useState } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { register } from "../../store/actions/index";
import styles from "./RegistrationForm.module.scss";

import {
  Button,
  Card,
  Header,
  Form,
  Message,
  Segment
} from "semantic-ui-react";

const Registration = props => {
  const [newUser, setNewUser] = useState({
    username: "",
    password: ""
  });

  const [userNameErrors, setUserNameErrors] = useState("");
  const [passwordErrors, setPasswordErrors] = useState("");

  const defaultUser = {
    username: "",
    password: ""
  };

  const validateForm = () => {
    let valid = true;

    if (newUser.username.length === 0 || userNameErrors.length > 0) {
      valid = false;
      setUserNameErrors("Username must have at least 3 characters");
    }

    if (newUser.password.length === 0 || passwordErrors.length > 0) {
      valid = false;
      setPasswordErrors("Password must have at least 6 characters");
    }

    return valid;
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (validateForm()) {
      console.log("Valid Form");
    } else {
      console.log("Invalid Form");
    }

    //console.log(newUser);

    props.register(newUser);
    resetForm();
    props.history.push("/login");
  };

  const handleInputChange = event => {
    event.preventDefault();
    const { name, value } = event.target;

    let userNameError = userNameErrors;
    let passwordError = passwordErrors;

    switch (name) {
      case "username":
        userNameError =
          value.length < 3 ? "Username must have at least 3 characters" : "";
        break;
      case "password":
        passwordError =
          value.length < 6 ? "Password must have at least 6 characters" : "";
        break;
      default:
        break;
    }
    setUserNameErrors(userNameError);
    setPasswordErrors(passwordError);

    setNewUser({ ...newUser, [name]: value });
  };

  const resetForm = () => {
    setNewUser(defaultUser);
  };

  return (
    <div>
      <Card className={styles.registrationCard}>
        <Card.Content className={styles.headerContainer}>
          <Header as="h1" className={styles.header}>
            New User Registration
          </Header>
        </Card.Content>
        <Card.Content>
          <Form
            size="large"
            onSubmit={handleSubmit}
            className={styles.registrationForm}
          >
            {/* <Segment stacked> */}
            <Form.Field>
              <label>Username</label>
              <input
                placeholder="Username"
                type="text"
                name="username"
                value={newUser.username}
                onChange={handleInputChange}
              />
            </Form.Field>
            {userNameErrors.length > 0 && (
              <Message color="red">
                <Message.Header>Username error</Message.Header>
                <p>{userNameErrors}</p>
              </Message>
            )}
            <Form.Field>
              <label htmlFor="password">Password</label>
              <input
                type="text"
                name="password"
                value={newUser.password}
                onChange={handleInputChange}
                placeholder="Password"
              />
            </Form.Field>
            {passwordErrors.length > 0 && (
              <Message color="red">
                <Message.Header>Password error</Message.Header>
                <p>{passwordErrors}</p>
              </Message>
            )}
            <Button className={styles.buttons} size="large" type="submit">
              Register
            </Button>
            {/* </Segment> */}
          </Form>
        </Card.Content>
      </Card>
    </div>
  );
};

const mapStateToProps = state => ({
  isRegistering: state.isRegistering,
  error: state.error
});

export default withRouter(
  connect(
    mapStateToProps,
    { register }
  )(Registration)
);
