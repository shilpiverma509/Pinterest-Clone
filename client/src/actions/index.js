import axios from "axios";

//using axios to make ajax requests
export const fetchUser = () => {
  return async dispatch => {
    const res = await axios.get("/api/current_user");
    dispatch({
      type: "FETCH_USER",
      payload: res
    });
  };
};
