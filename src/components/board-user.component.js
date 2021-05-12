import React, { Component } from "react";
import UserService from "../services/user.service";
import Userpage from "./Userpage.component";
import AuthService from "../services/auth.service";

export default class BoardUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: AuthService.getCurrentUser(),
      content: "",
    };
  }

  componentDidMount() {
    UserService.getUserBoard().then(
      (response) => {
        this.setState({
          content: response.data,
        });
      },
      (error) => {
        this.setState({
          content:
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString(),
        });
      }
    );
  }

  render() {
    const { currentUser } = this.state;

    return (
      <div className="container">
        {currentUser && <Userpage></Userpage>}
      </div>
    );
  }
}
