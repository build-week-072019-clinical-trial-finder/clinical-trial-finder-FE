import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import { NavLink, withRouter, Link } from "react-router-dom";
import { Menu, Statistic } from "semantic-ui-react";
import { logout } from '../../store/actions/index';
import logo from '../../assets/logo.png';
import './Navbar.scss';

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
    <Menu fixed='top' secondary className='navbar' style={{background: 'white'}}>
      <Menu.Menu position='left'>
        <Link to='/'><img src={logo}/></Link>
      </Menu.Menu>
      {props.isLoggedIn || token ? (
        <Menu.Menu position="right">
          <Menu.Item as={NavLink} to="/watchlist">
            Watchlist
            {numSavedTrial > 0 &&
              (<Statistic size='mini' style={{ fontSize:'0.3rem', paddingLeft: '5px'}}>
                <Statistic.Value >{numSavedTrial}</Statistic.Value>
              </Statistic>)}
          </Menu.Item>
          <Menu.Item as={NavLink} to="/" onClick={logout} >
            Logout
          </Menu.Item>
        </Menu.Menu>
      ) : (
        <Menu.Menu position="right" >
          <Menu.Item as={NavLink} to="/login" >
            Login
          </Menu.Item>
          <Menu.Item as={NavLink} to="/registration" >
            Register
          </Menu.Item>
        </Menu.Menu>
      )}
    </Menu>
  );
};

const mapStateToProps = (state) => ({
  isLoggedIn: state.isLoggedIn,
  watchlist: state.watchlist
})

export default withRouter(connect(mapStateToProps, { logout })(Navbar));
