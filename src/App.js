import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Login from "./components/login.component";
import Register from "./components/register.component";
import Home from "./components/home.component";
import IIB from "./components/IIB";
import APIC from "./components/APIC";
import Profile from "./components/profile.component"
class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <Switch>
            <Route exact path={["/", "/login"]} component={Login} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/IIB" component={IIB} />
            <Route exact path="/APIC" component={APIC} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
