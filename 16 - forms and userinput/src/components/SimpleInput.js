import { useEffect, useState } from "react";
import { useInput } from "../hooks/useInput";

const SimpleInput = (props) => {
  const {
    value: enteredName,
    hasError: nameInputHasError,
    isValid: enteredNameIsValid,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailInputBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.includes("@"));

  let formsIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) {
    formsIsValid = true;
  }

  const formSubmitHandler = (e) => {
    e.preventDefault();

    if (!enteredNameIsValid) {
      return;
    }
    //const inputValue = nameInputRef.current.value;
    resetNameInput();

    resetEmailInput();
  };

  const nameInputClasses = nameInputHasError
    ? "form-control invalid"
    : "form-control ";

  const emailInputClasses = emailInputHasError
    ? "form-control invalid"
    : "form-control ";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>

        <input
          type="text"
          id="name"
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          value={enteredName}
        />
        {nameInputHasError && (
          <p className="error-text">Name must not be Empty</p>
        )}
      </div>

      <div className={emailInputClasses}>
        <label htmlFor="email">Your Email</label>

        <input
          type="email"
          id="email"
          onChange={emailChangeHandler}
          onBlur={emailInputBlurHandler}
          value={enteredEmail}
        />
        {emailInputHasError && (
          <p className="error-text">Email must include @</p>
        )}
      </div>
      <div className="form-actions">
        <button
          disabled={!formsIsValid}
          className={!formsIsValid ? "btn-disabled" : ""}
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default SimpleInput;
