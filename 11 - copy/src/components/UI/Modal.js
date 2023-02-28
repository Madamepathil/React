import React from "react";
import classes from "./Modal.module.css";

const BackDrop = (props) => {
  return <div onClick={props.onClick} className={classes.backdrop}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

export const Modal = (props) => {
  return (
    <>
      <BackDrop onClick={props.onClick} />
      <ModalOverlay>{props.children}</ModalOverlay>
    </>
  );
};
