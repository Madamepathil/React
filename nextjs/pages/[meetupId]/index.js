import { useRouter } from "next/router";
import React from "react";
import MeetupDetail from "../../components/meetups/MeetupDetail";
const MeetupDetails = (props) => {
  return (
    <>
      <MeetupDetail
        image="https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/M%C3%BCnchen_Panorama.JPG/1200px-M%C3%BCnchen_Panorama.JPG"
        title="first meetup"
        descirption="this is a first meetup"
      />
    </>
  );
};

/* vi måste pre rendera alla id dvs vad som kmr efter / i url, funktionen
nedan kan inte veta vilka id annars som kan vara */
export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
}
export async function getStaticProps(context) {
  //Fetch data for single meetup
  const meetupdId = context.params.meetupId;
  console.log(meetupdId);
  return {
    props: {
      meetupData: {
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/M%C3%BCnchen_Panorama.JPG/1200px-M%C3%BCnchen_Panorama.JPG",
        title: "first meetup",
        id: meetupdId,
        descirption: "this is a first meetup",
      },
    },
  };
}
export default MeetupDetails;
