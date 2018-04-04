import axios from "axios";
import { FETCH_USER } from "./types";

//using axios to make ajax requests
export const fetchUser = () => async dispatch => {
  const res = await axios.get("/api/current_user");
  dispatch({
    type: FETCH_USER,
    payload: res.data //data is a property in payload which is the user model
  });
};
