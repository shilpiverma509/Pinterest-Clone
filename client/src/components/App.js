import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./Header";
import Dashboard from "./Dashboard";
import Landing from "./Landing";
import BoardNew from "./boards/BoardNew";
import * as actions from "../actions";
import { connect } from "react-redux";

class App extends React.Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div className="container">
            <Header />
            <Route path="/" component={Landing} exact />
            <Route path="/pins" component={Dashboard} exact />
            <Route path="/boards/new" component={BoardNew} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
//actions are assigned as props to App
