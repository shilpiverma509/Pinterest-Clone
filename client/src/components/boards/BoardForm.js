/**
 * Shows the form fields
 */
import React from "react";
import { reduxForm, Field } from "redux-form";
import BoardFields from "./BoardFields";
import Category from "./Category";

class BoardForm extends React.Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
          <Field
            label="Name"
            type="text"
            name="boardName"
            component={BoardFields}
          />
          <Field
            label="Description"
            type="text"
            name="description"
            component={BoardFields}
          />

          <Field
            label="Category"
            type="text"
            name="categories"
            component={Category}
          />
          <Field
            label="privacy"
            name="privacySettings"
            component="input"
            type="checkbox"
          />
          <button className="red btn-flat right white-text" type="button">
            Cancel
          </button>
          <button className="teal btn-flat right white-text" type="submit">
            Create
          </button>
        </form>
      </div>
    );
  }
}
export default reduxForm({
  form: "newBoardForm"
})(BoardForm);

/*
 * 

          {/*<button className="red btn-flat right white-text" type="button">
            Cancel
          </button>
          <button className="teal btn-flat right white-text" type="submit">
            Create
    </button>*
 */
