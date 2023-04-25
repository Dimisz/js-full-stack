import MeetupList from "../components/meetups/MeetupsList";

const AllMeetupsPage = ({meetups}) => {
  return(
    <section>
      <h1>AllMeetupsPage</h1>
      <MeetupList meetups={meetups} />
    </section>
  );
}

export default AllMeetupsPage;