import styles from './MeetupList.module.css';
import MeetupItem from './MeetupItem';

const MeetupList = ({meetups}) => {
  const renderedMeetups = meetups.map((meetup) => {
    return <MeetupItem key={meetup.id} meetup={meetup} />
  });

  return(
    <ul className={styles.list}>{renderedMeetups}</ul>
  );
}

export default MeetupList;