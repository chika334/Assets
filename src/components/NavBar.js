import React, { Component } from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import {Link, withRouter} from 'react-router-dom';
import logo from '../images/logo.png';

class NavBar extends Component {
  logout(e){
    e.preventDefault()
    localStorage.removeItem('usertoken')
    this.props.history.push(`/`)
  } f
  render() {

    // const loginRegLink = (
    //   <ul className="navbar-nav">
    //     <li className="nav-item">
    //       <Link to="/profile" className="nav-link">
    //         Login
    //       </Link>
    //     </li>
    //     <li className="nav-item">
    //       <a href="" onClick={this.logout.bind(this)} className="nav-link">
    //         Register
    //       </a>
    //     </li>
    //   </ul>
    // )

    // const userLink = (
    //   <ul className="navbar-nav">
    //     <li className="nav-item">
    //       <Link to="/profile" className="nav-link">
    //         User
    //       </Link>
    //     </li>
    //     <li className="nav-item">
    //       <a href="" onClick={this.logout.bind(this)} className="nav-link">
    //         logout
    //       </a>
    //     </li>
    //   </ul>
    // )

    return(
      <>
          <Navbar collapseOnSelect expand="lg">
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
              {/* {localStorage.usertoken ? userLink : loginRegLink} */}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </>
      )
  }
}
export default withRouter(NavBar);