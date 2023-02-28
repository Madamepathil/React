import { useContext, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../../store/authContext";

import classes from "./AuthForm.module.css";

const AuthForm = () => {
  const history = useHistory();
  const [isLogin, setIsLogin] = useState(true);
  const emailInput = useRef();
  const passwordInput = useRef();
  const [hasError, setHasError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [sucessRegister, setSucessRegister] = useState("");

  const authCtx = useContext(AuthContext);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    const enteredEmail = emailInput.current.value;
    const enteredPassword = passwordInput.current.value;

    //optional : Add Validation

    let url;
    if (isLogin) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyByL9lBTVIdtPoBJP2a9aCknxYxuR_C5MY";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyByL9lBTVIdtPoBJP2a9aCknxYxuR_C5MY";
    }

    try {
      setIsLoading(true);
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
          returnSecureToken: true,
        }),
        headers: { "content-Type": "application/json" },
      });

      const data = await response.json();
      setIsLoading(false);
      if (!response.ok) {
        let errorMessage = "Authentication failed";
        if (data && data.error && data.error.message) {
          errorMessage = data.error.message;
        }
        throw new Error(errorMessage);
      }
      setSucessRegister(true);
      const expirationTime = new Date(
        new Date().getTime() + +data.expiresIn * 1000
      );
      authCtx.login(data.idToken, expirationTime.toISOString());
      history.replace("/");
    } catch (error) {
      const newErrorFormated = error.message.replace("_", " ");
      setHasError(newErrorFormated);
      setSucessRegister(false);
    }
  };

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      {hasError && <p style={{ color: "red" }}>{hasError}</p>}
      {!isLogin && sucessRegister && (
        <p style={{ color: "lightgreen" }}>Sucessfully registered</p>
      )}
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" required ref={emailInput} />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input type="password" id="password" required ref={passwordInput} />
        </div>
        <div className={classes.actions}>
          {!isLoading && (
            <button>{isLogin ? "Login" : "Create Account"}</button>
          )}
          {isLoading && <p>Loading...</p>}
          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? "Create new account" : "Login with existing account"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
