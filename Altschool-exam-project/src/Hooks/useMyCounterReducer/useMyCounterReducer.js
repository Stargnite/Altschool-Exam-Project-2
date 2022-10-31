import React, { useReducer, useState } from "react";

const useMyCounterReducer = (reducer, initialState) => {
  const [state, setState] = useState(initialState);

  const dispatch = (actions) => {
    const newState = reducer(state, actions);
    setState(newState);
  };

  return  [state, dispatch]
};

export default useMyCounterReducer;
