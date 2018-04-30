/**
 * display all the boards for current user
 * display the boards, pins button to show them
 */

import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => (
  <div>
    <div className="fixed-action-btn">
      <Link
        to="/boards/new"
        className="btn-floating btn-large red btn modal-trigger"
      >
        <i className="large material-icons">add</i>
      </Link>
    </div>
  </div>
);

export default Dashboard;
