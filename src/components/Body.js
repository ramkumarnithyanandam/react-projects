import React, { Component } from "react";
import AuthService from "../services/auth.service";
class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: AuthService.getCurrentUser()
    };
  }
  render() {
    const { currentUser } = this.state;
    return (
      <div>
   
      </div>
    );
  }
}
export default Body;
