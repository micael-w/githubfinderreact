import React, { useReducer } from "react";
import AlertContext from "./alertContext";
import AlertReducer from "./alertReducer";
import { SET_ALERT, REMOVE_ALERT } from "../types";

const AlertState = (props) => {
  // global state for anything that has
  // to do with alerts
  const initialState = null;

  // we call an action which makes a request
  // we then dispatch a type back to our reducer

  const [state, dispatch] = useReducer(AlertReducer, initialState);

  // Set Alert
  const setAlert = (msg, type) => {
    dispatch({
      type: SET_ALERT,
      payload: {msg, type}
    })

    setTimeout(() => dispatch({type: REMOVE_ALERT}), 3000);
  };

  return (
    <AlertContext.Provider
      // we're making this available to the entire app
      value={{
        alert: state,
        setAlert,
      }}
    >
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;
