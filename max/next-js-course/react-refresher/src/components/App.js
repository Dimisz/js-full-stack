import { Route, Switch } from 'react-router-dom';
import { useState } from 'react';
import { ReactId } from 'reactjs-id';

import AllMeetupsPage from '../pages/AllMeetupsPage';
import FavouritesPage from '../pages/FavouritesPage';
import NewMeetupPage from '../pages/NewMeetupPage';

import Layout from './layout/Layout';


const DUMMY_DATA = [
  {
    id: ReactId(),
    title: 'This is a first meetup',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
    address: 'Meetupstreet 5, 12345 Meetup City',
    description:
      'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
  },
  {
    id: ReactId(),
    title: 'This is a second meetup',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
    address: 'Meetupstreet 5, 12345 Meetup City',
    description:
      'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
  },
];


const App = () => {
  const [meetups, setMeetups] = useState(DUMMY_DATA);

  const addMeetup = (meetup) => {
    setMeetups((prev) => {
      return [...prev, meetup];
    });
  }

  return(
    <Layout>
      <Switch>
        <Route path='/new-meetup' exact>
          <NewMeetupPage addMeetup={addMeetup} />
        </Route>
        <Route path='/favourites' exact>
          <FavouritesPage />
        </Route>
        <Route path='/' exact>
          <AllMeetupsPage meetups={meetups} />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;