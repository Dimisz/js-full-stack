import NewMeetupForm from "../components/meetups/NewMeetupForm";

const NewMeetupPage = ({addMeetup}) => {
  return(
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm addMeetup={addMeetup} />
    </section>
  );
}

export default NewMeetupPage;