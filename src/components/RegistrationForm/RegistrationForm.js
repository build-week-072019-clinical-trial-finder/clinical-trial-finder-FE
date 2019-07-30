import React, { useState } from "react";
import { connect } from "react-redux";
<<<<<<< HEAD
import { register } from "../../store/actions/index";
import styles from "../../assets/styles/theme.module.scss";
=======
import { withRouter } from 'react-router-dom';
import { register } from '../../store/actions/index';
>>>>>>> 9c350711767a0de2bd6b2ff091afaac83d5aa69d

import { Button, Header, Form, Message, Segment } from "semantic-ui-react";
const Registration = (props) => {
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
    console.log(newUser);
    props.register(newUser)
    resetForm();
    props.history.push('/login');  
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
          <Button className={styles.buttons} fluid size="large" type="submit">
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

export default withRouter(connect(mapStateToProps, { register })(Registration));
