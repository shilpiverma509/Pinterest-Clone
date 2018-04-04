import { FETCH_USER } from "../actions/types";

//state=null we don't know if user is logged in
export default (state = null, action) => {
  //console.log(action);
  switch (action.type) {
    case FETCH_USER:
      return action.payload || false;
    default:
      return state;
  }
};
