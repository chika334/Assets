import React, { Component, Fragment } from 'react';
import { Navbar, NavbarBrand, NavbarToggler, Nav, NavLink, NavItem, Collapse, Container } from 'reactstrap';
import { connect } from 'react-redux';
import logo from '../images/logo.png';
import Logout from '../pages/Logout';
import PropTypes from 'prop-types';

class NavBar extends Component {
  state = {
    isOpen: false
  }

  static propTypes = {
    auth: PropTypes.object.isRequired
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    const { isAuthenticated, user } = this.props.auth;

    const authLinks = (
      <Fragment>
        <NavItem>
          <NavLink href="#">dep 1</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">dep 2</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">dep 3</NavLink>
        </NavItem>
        {
          isAuthenticated && user.isAdmin ?
            <NavItem>
              <NavLink href="/register">SignUp</NavLink>
            </NavItem> : ""
        }
        <NavItem>
          <span className="navbar-text mr-3">
            <strong>
              {user ? `Welcome ${user.firstname}` : ''}
            </strong>
          </span>
        </NavItem>
        <NavItem>
          <Logout />
        </NavItem>
      </Fragment>
    );

    const adminLink = (
      <Fragment>
        <NavItem>
          <NavLink href="/register">SignUp</NavLink>
        </NavItem>
      </Fragment>
    )

    const guestLink = (
      <Fragment>
        <NavItem>
          <NavLink href="/">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/about">About</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/contact">Contact</NavLink>
        </NavItem>
      </Fragment>
    );
    return (
      <div className="ml-4">
        <Navbar expand='sm'>
          {/* <Container> */}
          <NavbarBrand href="#home">
            <img src={logo} className="img" />
              Freshaluck
            </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse id="basic-navbar-nav" isOpen={this.state.isOpen} navbar>
            <Nav className="navlink mr-5" navbar>
              {isAuthenticated ? authLinks : guestLink}
            </Nav>
          </Collapse>
          {/* </Container> */}
        </Navbar>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, null)(NavBar);