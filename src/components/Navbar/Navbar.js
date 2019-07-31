import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import { NavLink, withRouter } from "react-router-dom";
import { Menu, Header, Statistic } from "semantic-ui-react";
import { logout } from '../../store/actions/index';
import logo from '../../images/logo-white.png';

const Navbar = (props) => {
  const [numSavedTrial, setNumSavedTrial] = useState(0);

  useEffect(() => {
    setNumSavedTrial(props.watchlist.length);
  }, [props.watchlist])

  let token = localStorage.getItem('token');

  const logout = (event) => {
    event.preventDefault();
    props.logout();
    props.history.push('/login');
    localStorage.clear();
  }

  return (
    <nav className="navbar">
      <Menu style={{'background': '#007991'}} fixed='top'>
        <Menu.Menu position='left'>
          <Header as='h3' image={logo} content='Clinical Trial Finder' style={{'color': 'white', 'paddingLeft': '10px'}}/>
        </Menu.Menu>
        {props.isLoggedIn || token ? (
          <Menu.Menu position="right">
            <Menu.Item as={NavLink} to="/watchlist" style={{'color': 'white'}}>
              Watchlist
              {numSavedTrial > 0 &&
                (<Statistic size='mini' style={{paddingLeft: '5px'}}>
                  <Statistic.Value style={{'color': 'white'}}>{numSavedTrial}</Statistic.Value>
                </Statistic>)}
            </Menu.Item>
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
  isLoggedIn: state.isLoggedIn,
  watchlist: state.watchlist
})

export default withRouter(connect(mapStateToProps, { logout })(Navbar));
