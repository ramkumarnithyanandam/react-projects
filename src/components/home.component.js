import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Footer from "./Footer";
import Body from "./Body";
import Header from "./Header";
import AuthService from "../services/auth.service";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: AuthService.getCurrentUser(),
    };
  }

  render() {
    const { currentUser } = this.state;
    return (
      <div>
        {currentUser && (
          <Container fluid="md">
            <Header history={this.props.history}></Header>
            <Body></Body>
            <Footer></Footer>
          </Container>
        )}
      </div>
    );
  }
}
