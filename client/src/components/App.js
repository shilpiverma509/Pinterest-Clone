import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./Header";
import Dashboard from "./Dashboard";
import Landing from "./Landing";
import NewPin from "./NewPin";
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
          <div>
            <Header />
            <Route path="/" component={Landing} exact />
            <Route path="/pins" component={Dashboard} exact />
            <Route path="/pins/new" component={NewPin} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
//actions are assigned as props to App
