import React, { useState } from 'react'

import { Button, Form } from 'semantic-ui-react'

import '../pages/login.css'


const Login = props => {
    const [input, setInput] = useState({
        username: "",
        password: "",
        id: null
    })
    const inputHandler = e => {
        console.log("target name", e.target.name);
        console.log("value", e.target.value);
        setInput({ ...input, [e.target.name]: e.target.value });
      };
      const submitHandler = e => {
        e.preventDefault();
        props.add({ ...input, id: Math.random() });
        setInput({
          name: "",
          email: "",
          role: "",
          id: null
        });
      };
    return (
        <Form onSubmit={submitHandler}> 
            <h2>Sign In</h2>
            <Form.Field>
                <label htmlFor="Username">
                    Username
                </label>
                <input
                    type="text"
                    value={input.name}
                    onChange={inputHandler}
                    name="username"
                    placeholder="Username"
                    />
                
                </Form.Field>
                <Form.Field>
                <label htmlFor="Password">
                    Password
                </label>
                <input
                    type="text"
                    value={input.password}
                    onChange={inputHandler}
                    name="password"
                    placeholder="Password"
                />
                
                </Form.Field>
                <Button color='black' type='submit'>Submit</Button>
                <p>Don't have an account? <a href="#">Register</a></p> 

            
        </Form>
    )
}

export default Login
