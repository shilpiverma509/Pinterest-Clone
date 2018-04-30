/**
 * Renders the Board Form with cancel and create buttons
 * After creating the board should send it to Dashboard page
 */

import React from "react";

import BoardForm from "./BoardForm";

class BoardNew extends React.Component {
  render() {
    return (
      <div>
        <BoardForm />
      </div>
    );
  }
}

export default BoardNew;
