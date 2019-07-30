import React from "react";
import { connect } from 'react-redux';
import { NavLink, withRouter } from "react-router-dom";
import { Menu } from "semantic-ui-react";
import { logout } from '../../store/actions/index';

const Navbar = (props) => {
  let token = localStorage.getItem('token') || null;

  const logout = (event) => {
    event.preventDefault();
    props.logout();
    props.history.push('/login');
    localStorage.clear();
  }

  return (
    <nav className="navbar">
      <Menu>
        <Menu.Item>Brand</Menu.Item>
        {props.isLoggedIn || token ? (
          <Menu.Menu position="right">
            <Menu.Item as={NavLink} to="/" onClick={logout}>
              Logout
            </Menu.Item>
          </Menu.Menu>
        ) : (
          <Menu.Menu position="right">
            <Menu.Item as={NavLink} to="/login">
              Login
            </Menu.Item>
            <Menu.Item as={NavLink} to="/registration">
              Register
            </Menu.Item>
          </Menu.Menu>
        )}
      </Menu>
    </nav>
  );
};

const mapStateToProps = (state) => ({
  isLoggedIn: state.isLoggedIn
})

export default withRouter(connect(mapStateToProps, { logout })(Navbar));
