import { useContext, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../../store/authContext";
import classes from "./ProfileForm.module.css";

const ProfileForm = () => {
  const history = useHistory();
  const newPassword = useRef();
  const authContext = useContext(AuthContext);
  const [hasError, setHasError] = useState("");
  const [sucess, setSucess] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    const password = newPassword.current.value;

    try {
      const response = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyByL9lBTVIdtPoBJP2a9aCknxYxuR_C5MY",
        {
          method: "POST",
          body: JSON.stringify({
            idToken: authContext.token,
            password: password,
            returnSecureToken: true,
          }),
          headers: { "content-Type": "application/json" },
        }
      );
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error.message);
      }
      setSucess(true);
      setHasError(false);
      setTimeout(() => {
        history.replace("/");
      }, 2000);
    } catch (error) {
      setHasError(error.message);
      setSucess(false);
    }
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        {hasError && <p style={{ color: "red" }}>{hasError}</p>}
        {sucess && <p style={{ color: "lightgreen" }}>Sucessfully updated</p>}
        <input type="password" id="new-password" ref={newPassword} />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
};

export default ProfileForm;
