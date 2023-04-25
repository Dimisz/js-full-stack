import { ReactId } from 'reactjs-id';
import { useState, useRef } from 'react';
import { Redirect } from 'react-router-dom';

import styles from './NewMeetupForm.module.css';
import Card from '../ui/Card';

const NewMeetupForm = ({addMeetup}) => {
  const [title, setTitle] = useState('');
  const [address, setAddress] = useState('');
  const [image, setImage] = useState('https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg');
  const [description, setDescription] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMeetup = {
      title, address, image, description, id: ReactId()
    };
    addMeetup(newMeetup);
    setSubmitted(true);
  }

  return(
    <Card>
      <form 
        className={styles.form}
        onSubmit={handleSubmit}
      >
        <div className={styles.control}>
          <label htmlFor='title'>Meetup Title</label>
          <input 
            type="text" 
            required 
            id="title" 
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className={styles.control}>
          <label htmlFor='image'>Image</label>
          <input 
            type="url" 
            id="image" 
            disabled
            // value={imageUrl}
            // onChange={(e) => setImageUrl(e.target.value)}
          />
        </div>
        <div className={styles.control}>
          <label htmlFor='address'>Address</label>
          <input 
            type="text" 
            id="adress" 
            required
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className={styles.control}>
          <label htmlFor='description'>Description</label>
          <textarea 
            id="adress" 
            required 
            rows="5"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <div className={styles.actions}>
          <button>Add Meetup</button>
        </div>
        {submitted && <Redirect to='/'></Redirect>}
      </form>
    </Card>
  );
}

export default NewMeetupForm;