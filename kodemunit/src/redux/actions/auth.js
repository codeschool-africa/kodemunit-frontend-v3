import axios from "axios";
import { REGISTER_SUCCESS, REGISTER_FAIL } from "../types/types";

export const register = ({
  email,
  firstName,
  lastName,
  locaTion,
  about,
  compAccess,
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
    })
    .catch(err => {
      const errors = err.response.data;
      console.log(errors);
      dispatch({
        type: REGISTER_FAIL
      });
    });
};
