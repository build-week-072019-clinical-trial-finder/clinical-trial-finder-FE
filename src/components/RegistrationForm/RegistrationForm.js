import React, { useState } from "react";
import { connect } from 'react-redux';
import { register } from '../../store/actions/index';

import { Button, Form, Message, Segment } from "semantic-ui-react";
const Registration = (props) => {
  const [newUser, setNewUser] = useState({
    username: "",
    password: ""
  });

  const defaultUser = {
    username: "",
    password: ""
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(newUser);
    props.register(newUser)
    resetForm();
  };

  const handleInputChange = event => {
    event.preventDefault();
    const { name, value } = event.target;

    setNewUser({ ...newUser, [name]: value });
  };

  const resetForm = () => {
    setNewUser(defaultUser);
  };
  return (
    <div>
      <Form size="large" onSubmit={handleSubmit}>
        <Segment stacked>
          <Form.Input
            fluid
            placeholder="Username"
            type="text"
            name="username"
            value={newUser.username}
            onChange={handleInputChange}
            required
          />
          <Form.Input
            fluid
            placeholder="Password"
            type="password"
            name="password"
            value={newUser.password}
            onChange={handleInputChange}
            required
          />
          <Button color="teal" fluid size="large" type="submit">
            Register
          </Button>
        </Segment>
      </Form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isRegistering: state.isRegistering,
  error: state.error
})

export default connect(mapStateToProps, { register })(Registration);
