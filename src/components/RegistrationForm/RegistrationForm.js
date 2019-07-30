import React, { useState } from "react";
import { connect } from "react-redux";
import { register } from "../../store/actions/index";

import { Button, Header, Form, Message, Segment } from "semantic-ui-react";
const Registration = () => {
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
      <Form size="large" onSubmit={handleSubmit}>
        <Header as="h1">New User Registration</Header>
        <Segment stacked>
          <Form.Input
            fluid
            placeholder="Username"
            type="text"
            name="username"
            value={newUser.username}
            onChange={handleInputChange}
          />
          {userNameErrors.length > 0 && (
            <Message color="red">
              <Message.Header>Username error</Message.Header>
              <p>{userNameErrors}</p>
            </Message>
          )}
          <Form.Input
            fluid
            placeholder="Password"
            type="password"
            name="password"
            value={newUser.password}
            onChange={handleInputChange}
          />
          {passwordErrors.length > 0 && (
            <Message color="red">
              <Message.Header>Password error</Message.Header>
              <p>{passwordErrors}</p>
            </Message>
          )}
          <Button color="teal" fluid size="large" type="submit">
            Register
          </Button>
        </Segment>
      </Form>
    </div>
  );
};

const mapStateToProps = state => ({
  isRegistering: state.isRegistering,
  error: state.error
});

export default connect(
  mapStateToProps,
  { register }
)(Registration);
