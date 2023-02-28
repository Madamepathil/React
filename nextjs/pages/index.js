import { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A first meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/M%C3%BCnchen_Panorama.JPG/1200px-M%C3%BCnchen_Panorama.JPG",
    adress: "some adress 5, 12345 some city",
    description: "this is a first meetups",
  },
  {
    id: "m2",
    title: "A second meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/M%C3%BCnchen_Panorama.JPG/1200px-M%C3%BCnchen_Panorama.JPG",
    adress: "some adress 5, 12345 some city",
    description: "this is a second meetups",
  },
];
const HomePage = (props) => {
  return <MeetupList meetups={props.meetups} />;
};

//kod här sker bara under buildprocess
//måste pre rendera data som vi vill hämta från api
export async function getStaticProps() {
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    revalidate: 1,
  };
}

//körs inte under buildprocces utan efter deplyment på servern
//körs på varje request , minus - måste vänta på att sidan ska laddas
//på varje req,
/* export async function getServerSideProps(context) {
  const req = context.req;
  const res = context.res;
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
  };
} */

export default HomePage;
