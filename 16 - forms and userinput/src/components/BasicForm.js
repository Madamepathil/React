import { useState } from "react";
import useInput2 from "../hooks/useInput2";

const BasicForm = (props) => {
  const {
    enteredValue: fNameValue,
    valueChangeHandler: fNamevalueChangeHandler,
    touchHandler: fNametouchHandler,
    hasError: fNameHasError,
    valueIsValid,
    reset: fNameReset,
  } = useInput2((value) => value.trim() !== "");

  const {
    enteredValue: lNameValue,
    valueChangeHandler: lNamevalueChangeHandler,
    touchHandler: lNametouchHandler,
    hasError: lNameHasError,
    valueIsValid: lNameValueIsValid,
    reset: lNameReset,
  } = useInput2((value) => value.trim() !== "");

  const {
    enteredValue: eNameValue,
    valueChangeHandler: eNamevalueChangeHandler,
    touchHandler: eNametouchHandler,
    hasError: eNameHasError,
    valueIsValid: eNameValueIsValid,
    reset: eNameReset,
  } = useInput2((value) => value.includes("@"));

  const firstNameClasses = fNameHasError
    ? " form-control invalid"
    : "form-control";

  const lastNameClasses = lNameHasError
    ? " form-control invalid"
    : "form-control";
  const emailClasses = eNameHasError ? " form-control invalid" : "form-control";

  const submitFormHandler = (e) => {
    e.preventDefault();

    if (!valueIsValid && !lNameValueIsValid && !eNameValueIsValid) return;

    fNameReset();
    lNameReset();
    eNameReset();
  };

  let formIsValid = false;

  if (valueIsValid && lNameValueIsValid) {
    formIsValid = true;
  }

  return (
    <form onSubmit={submitFormHandler}>
      <div className="control-group">
        <div className={firstNameClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            onBlur={fNametouchHandler}
            onChange={fNamevalueChangeHandler}
            value={fNameValue}
          />
          {fNameHasError && <p className="error-text">field cannot be empty</p>}
        </div>
        <div className={lastNameClasses}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            onChange={lNamevalueChangeHandler}
            onBlur={lNametouchHandler}
            value={lNameValue}
          />
          {lNameHasError && <p className="error-text">field cannot be empty</p>}
        </div>
      </div>
      <div className={emailClasses}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          onChange={eNamevalueChangeHandler}
          onBlur={eNametouchHandler}
          value={eNameValue}
        />
        {eNameHasError && <p className="error-text">must include @</p>}
      </div>
      <div className="form-actions">
        <button
          disabled={!formIsValid}
          className={!formIsValid ? "btn-disabled" : ""}
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default BasicForm;
