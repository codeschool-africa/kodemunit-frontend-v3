import React from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

//user
import Register from "./users/register";

//pages
import Home from "./pages/home";
import About from "./pages/about";
import Error from "./components/error";

//setting axios
axios.defaults.baseURL =
  "https://us-central1-kodemunit-tz.cloudfunctions.net/api";

const hist = createBrowserHistory();

const App = () => {
  return (
    <Router history={hist}>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/register' component={Register} />
        <Route component={Error} />
      </Switch>
    </Router>
  );
};

const mapStateToProps = state => ({
  auth: state.auth
});

App.propTypes = {
  auth: PropTypes.object.isRequired
};

export default connect(mapStateToProps, {})(App);
