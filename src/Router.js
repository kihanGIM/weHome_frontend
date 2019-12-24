import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./Pages/Main";
import Login from "./Pages/Login";
// import Signup from './Pages/Signup';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/main" component={Main} />
          <Route path="/login" component={Login} />
          {/* <Route exact path="/signup" component={Signup} /> */}
        </Switch>
      </Router>
    );
  }
}

export default Routes;
