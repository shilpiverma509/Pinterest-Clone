/**
 * Contains logic to render a single label and text input
 * Rendered by the Field tag in BoardForm and hence
 * has props being passed from reduxFrom
 */
import React from "react";

const BoardFields = ({ input, label }) => {
  //console.log(input);
  return (
    <div>
      <label>{label}</label>
      <input {...input} style={{ marginBottom: "5px" }} />
    </div>
  );
};

export default BoardFields;
