import React, { useState } from "react";

const useInput2 = (validateValueFn) => {
  const [enteredValue, setenteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validateValueFn(enteredValue);

  const hasError = !valueIsValid && isTouched;

  const valueChangeHandler = (e) => {
    setenteredValue(e.target.value);
  };
  const touchHandler = (e) => {
    setIsTouched(true);
  };

  const reset = () => {
    setenteredValue("");
    setIsTouched(false);
  };

  return {
    enteredValue,
    isTouched,
    valueChangeHandler,
    touchHandler,
    hasError,
    valueIsValid,
    reset,
  };
};

export default useInput2;
