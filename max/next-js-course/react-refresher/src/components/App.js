import { Route, Switch } from 'react-router-dom';

import AllMeetupsPage from '../pages/AllMeetupsPage';
import FavouritesPage from '../pages/FavouritesPage';
import NewMeetupPage from '../pages/NewMeetupPage';

import Layout from './layout/Layout';


const App = () => {

  return(
    <Layout>
      <Switch>
        <Route path='/new-meetup' exact>
          <NewMeetupPage />
        </Route>
        <Route path='/favourites' exact>
          <FavouritesPage />
        </Route>
        <Route path='/' exact>
          <AllMeetupsPage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;