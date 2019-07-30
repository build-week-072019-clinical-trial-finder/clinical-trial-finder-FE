import React from "react";
import { NavLink } from "react-router-dom";
import { Menu } from "semantic-ui-react";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Menu>
        <Menu.Item>Brand</Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item as={NavLink} to="/login">
            Login
          </Menu.Item>
          <Menu.Item as={NavLink} to="/registration">
            Register
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    </nav>
  );
};

export default Navbar;
