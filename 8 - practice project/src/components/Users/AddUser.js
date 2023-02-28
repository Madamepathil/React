import React, { useState } from "react";
import { Button } from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddUser.module.css";

function AddUser(props) {
  const [textUser, setTextUser] = useState("");
  const [ageUser, setAgeUser] = useState("");
  const [showErrorModal, setShowErrorModal] = useState();

  const setTextUserHandler = (e) => {
    setTextUser(e.target.value);
  };
  const setAgeUserHandler = (e) => {
    setAgeUser(e.target.value);
  };

  const closeErrorModal = () => {
    setShowErrorModal(false);
  };

  const addUserHandler = (e) => {
    e.preventDefault();

    if (textUser.trim().length === 0 || ageUser.length === 0) {
      setShowErrorModal({
        title: "Invalid input",
        message: "enter valid name and age",
      });
      return;
    }

    if (+ageUser < 1) {
      setShowErrorModal({
        title: "Invalid input",
        message: "age must be over 0",
      });
      return;
    }

    setAgeUser("");
    setTextUser("");
    props.addUserList(ageUser, textUser);
  };
  return (
    <>
      {showErrorModal && (
        <ErrorModal
          title={showErrorModal.title}
          message={showErrorModal.message}
          closeErrorModal={closeErrorModal}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            onChange={setTextUserHandler}
            type="text"
            id="username"
            value={textUser}
          />

          <label htmlFor="age">Age</label>
          <input
            onChange={setAgeUserHandler}
            type="number"
            id="age"
            value={ageUser}
          />

          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
}

export default AddUser;
