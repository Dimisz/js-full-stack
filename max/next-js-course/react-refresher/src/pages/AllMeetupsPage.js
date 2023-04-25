import { useState, useEffect } from "react";
import MeetupList from "../components/meetups/MeetupsList";

const AllMeetupsPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [meetups, setMeetups] = useState([]);

  useEffect(
    () => {
      setIsLoading(true);
      fetch('https://meetup-nextjs-app-default-rtdb.firebaseio.com/meetups.json')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const meetups = [];
        for(const key in data){
          const meetup = {
            id: key,
            ...data[key]
          }
          meetups.push(meetup);
        }

        setIsLoading(false);
        console.log(meetups);
        setMeetups(meetups);
      });
    }, []);


  if(isLoading){
    return(
      <section>
        <p>Loading....</p>
      </section>
    )
  }

  return(
    <section>
      <h1>AllMeetupsPage</h1>
      <MeetupList meetups={meetups} />
    </section>
  );
}

export default AllMeetupsPage;