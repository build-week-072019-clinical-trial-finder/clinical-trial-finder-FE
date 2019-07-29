import React from 'react';
import { connect } from 'react-redux';

const NavBar = (props) => {
  
  const logout = (event) => {
    event.preventDefault();
    props.logout();
    props.history.push('/login');
    localStorage.clear();
  }
  
  return (
    <div>
      <div>
        <h2>Clinical Trial Finder</h2>
      </div>
      {props.isLoggedIn && 
        <div>
          <div onClick={logout}></div>
        </div>}
    </div>
  )
}

const mapStateToProps = (state) => ({
  isLoggedIn: state.isLoggedIn
})

export default connect(mapStateToProps, { logout })(NavBar);
