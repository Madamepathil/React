import React from "react";
import styles from "./MeetupDetail.module.css";
const MeetupDetail = (props) => {
  return (
    <section className={styles.detail}>
      <img src={props.image} alt={props.title} />
      <h1>{props.title}</h1>
      <p>{props.decription}</p>
    </section>
  );
};

export default MeetupDetail;
