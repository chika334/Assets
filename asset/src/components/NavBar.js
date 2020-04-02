import React, { Component } from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import {connect} from 'react-redux'
import {Link, withRouter} from 'react-router-dom';
import logo from '../images/logo.png';
// import {login, register} from '../actions/userActions';

class NavBar extends Component {
  render() {
    const users = this.props.user
    // console.log(users)
    if(users === undefined) {
      return(
        <Navbar collapseOnSelect>
          <Navbar.Brand href="#home">
          <img src={logo} className="img" />
          Freshaluck
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="navlink">
              <Link to="/">Home</Link>
              <Link to="/about/">About</Link>
              <Link to="/contact/">Contact</Link>
              <Link to="/register/">Signup</Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      )
    } 
    else {
      return (
        <Navbar collapseOnSelect>
          <Navbar.Brand href="#home">
          <img src={logo} className="img" />
          Freshaluck
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="navlink">
              <Link to="/">Good</Link>
              <Link to="/about/">Now</Link>
              <Link to="/contact/">Letter</Link>
              <Link to="/register/">Logout</Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      )
    }
  }
}

// const mapStateToProps = (state, ownProps) => {
//   const userdetails = ownProps ? state.user.loginSuccess : "error"
//   // console.log(userdetails)
//   return {
//     user: userdetails
//   }
// }

// export default connect(mapStateToProps, {login})(NavBar);
export default NavBar;