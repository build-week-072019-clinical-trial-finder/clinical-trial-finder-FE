import React from "react";
import { connect } from 'react-redux';
import { NavLink, withRouter } from "react-router-dom";
import { Menu, Header } from "semantic-ui-react";
import { logout } from '../../store/actions/index';
import logo from '../../images/logo-white.png';

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
      <Menu style={{'background': '#007991'}}>
        <Menu.Menu position='left'>
          <Header as='h3' image={logo} content='Clinical Trial Finder' style={{'color': 'white', 'paddingLeft': '10px'}}/>
        </Menu.Menu>
        {props.isLoggedIn || token ? (
          <Menu.Menu position="right">
            <Menu.Item as={NavLink} to="/" onClick={logout} style={{'color': 'white'}}>
              Logout
            </Menu.Item>
          </Menu.Menu>
        ) : (
          <Menu.Menu position="right" >
            <Menu.Item as={NavLink} to="/login" style={{'color': 'white'}}>
              Login
            </Menu.Item>
            <Menu.Item as={NavLink} to="/registration" style={{'color': 'white'}}>
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
