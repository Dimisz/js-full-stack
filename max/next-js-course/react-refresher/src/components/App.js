import { Route, Switch } from 'react-router-dom';

import MainNavigation from './layout/MainNavigation';
import AllMeetupsPage from '../pages/AllMeetupsPage';
import FavouritesPage from '../pages/FavouritesPage';
import NewMeetupPage from '../pages/NewMeetupPage';

const App = () => {
  return(
    <div>
      <MainNavigation />
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
    </div>
  );
}

export default App;