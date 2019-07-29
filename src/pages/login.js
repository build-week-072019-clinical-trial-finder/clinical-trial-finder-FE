import React, { useState } from 'react'


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
        <form onSubmit={submitHandler}> 
            <h1>Sign In</h1>
            <div>
                <label htmlFor="Username">
                    Username:{" "}
                    <input
                        type="text"
                        value={input.name}
                        onChange={inputHandler}
                        name="username"
                        />
                </label>
                <label htmlFor="Password">
                    Password:{" "}
                    <input
                        type="text"
                        value={input.password}
                        onChange={inputHandler}
                        name="password"
                    />
                </label>
                <button>Submit</button>
            </div>
        </form>
    )
}

export default Login
