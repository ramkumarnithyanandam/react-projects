import React, { Component } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import infosyslogo from "../infosys-logo-1.jpeg";
import ExitToApp from "@material-ui/icons/ExitToApp";
import Tooltip from "@material-ui/core/Tooltip";
import AuthService from "../services/auth.service";
import PersonIcon from "@material-ui/icons/Person";
import HelpIcon from "@material-ui/icons/Help";

class Header extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);
    this.state = {
      currentUser: AuthService.getCurrentUser(),
    };
  }

  logOut() {
    AuthService.logout();
    this.props.history.push("/login");
    window.location.reload();
  }
  render() {
    const { currentUser } = this.state;
    return (
      <div className="fixed-top">
        <Navbar variant="ligth" bg="ligth">
          <img
            src={infosyslogo}
            alt="profile-img"
            className="profile-brand-card"
            href="/home"
          />
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="navBarItem">
              <NavDropdown title="SOA" id="collasible-nav-dropdown">
                <NavDropdown.Item href="/IIB" id="collasible-nav-dropdown-item">
                  IBM Information Bus
                </NavDropdown.Item>
                <NavDropdown.Item href="/IIB" id="collasible-nav-dropdown-item">
                  Mulesoft
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav className="navBarItem">
              <NavDropdown title="API" id="collasible-nav-dropdown">
                <NavDropdown.Item
                  href="/APIC"
                  id="collasible-nav-dropdown-item"
                >
                  API Connect
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="/APIC"
                  id="collasible-nav-dropdown-item"
                >
                  APIGEE
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="/APIC"
                  id="collasible-nav-dropdown-item"
                >
                  Mulesoft
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>

            <Nav className="mr-auto">
              <NavDropdown title="Miscellaneous" id="collasible-nav-dropdown">
                <NavDropdown.Item
                  href="/APIC"
                  id="collasible-nav-dropdown-item"
                >
                  User guide
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="/APIC"
                  id="collasible-nav-dropdown-item"
                >
                  Mapping
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="/APIC"
                  id="collasible-nav-dropdown-item"
                >
                  Search
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav className="navBarItem">
              <Tooltip title="Help">
                <HelpIcon fontSize="large"></HelpIcon>
              </Tooltip>
            </Nav>

            <Nav className="navBarItem">
              <Tooltip title={currentUser.username}>
                <PersonIcon fontSize="large"></PersonIcon>
              </Tooltip>
            </Nav>
            <Nav>
              <Tooltip title="log out">
                <ExitToApp
                  fontSize="large"
                  href="/login"
                  onClick={this.logOut}
                ></ExitToApp>
              </Tooltip>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
export default Header;
