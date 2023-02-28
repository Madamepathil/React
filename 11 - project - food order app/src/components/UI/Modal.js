import React from "react";
import classes from "./Modal.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onCloseModal}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const Modal = (props) => {
  return (
    <>
      <Backdrop onCloseModal={props.onCloseModal} />
      <ModalOverlay>{props.children}</ModalOverlay>
    </>
  );
};

export default Modal;
