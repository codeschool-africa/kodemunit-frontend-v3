import axios from "axios";
import { setAlert } from "./alert";
import { REGISTER_SUCCESS, REGISTER_FAIL } from "../types/types";

export const register = ({
  email,
  firstName,
  lastName,
  locaTion,
  about,
  compAccess,
  hoursWeek,
  goodTime,
  learningStyle
}) => async dispatch => {
  const newUser = {
    email: email,
    password: lastName,
    firstName: firstName,
    lastName: lastName,
    locaTion: locaTion,
    about: about,
    compAccess: compAccess,
    hoursWeek: hoursWeek,
    goodTime: goodTime,
    learningStyle: learningStyle
  };
  axios
    .post("/signup", newUser)
    .then(res => {
      console.log(res.data);
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data
      });
      dispatch(setAlert(res.data.success, "success"));
    })
    .catch(err => {
      const errors = err.response.data;
      dispatch(setAlert(errors.error, "error"));
      console.log(errors);
      dispatch({
        type: REGISTER_FAIL,
        payload: err.response.data
      });
    });
};
