import React from "react";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";
const index = () => {
  async function addMeetupHandler(datas) {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(datas),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    console.log(data);
  }
  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
};

export default index;
