import React, { useContext, useEffect, useReducer, useState } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
import AuthContext from "../../store/auth-context";
import Input from "../UI/Input/Input";

const emailReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.includes("@") };
  }
  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.includes("@") };
  }

  return { value: "", isValid: false };
};
const Login = (props) => {
  const AuthCtx = useContext(AuthContext);
  /*   const [enteredEmail, setEnteredEmail] = useState("");
  const [emailIsValid, setEmailIsValid] = useState(); */
  const [enteredPassword, setEnteredPassword] = useState("");
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailstate, dispathEmail] = useReducer(emailReducer, {
    value: "",
    isValid: false,
  });

  /*   useEffect(() => {
    console.log("Effect running");
  }, []);

  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log("checkinf form validity");
      setFormIsValid(
        enteredEmail.includes("@") && enteredPassword.trim().length > 6
      );
    }, 2000);
    return () => {
      console.log("cleanUp");
      clearTimeout(identifier);
    };
  }, [setFormIsValid, enteredEmail, enteredPassword]); */

  const emailChangeHandler = (event) => {
    dispathEmail({ type: "USER_INPUT", val: event.target.value });
    setFormIsValid(
      emailstate.value.includes("@") && enteredPassword.trim().length > 6
    );
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
    setFormIsValid(emailstate.isValid && enteredPassword.trim().length > 6);
  };

  const validateEmailHandler = () => {
    dispathEmail({ type: "INPUT_BLUR" });
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const submitHandler = (event) => {
    if (formIsValid) {
      AuthCtx.onLogin(emailstate.value, enteredPassword);
    } else if (!email) {
    }
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          id="email"
          type="email"
          label="E-Mail"
          isValid={emailstate.isValid}
          value={emailstate.value}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
        />

        <Input
          id="password"
          type="password"
          label="Password"
          isValid={passwordIsValid}
          value={enteredPassword}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
        />

        <div className={classes.actions}>
          <Button type="submit" className={classes.btn}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
