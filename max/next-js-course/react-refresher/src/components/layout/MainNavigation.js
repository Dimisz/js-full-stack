import { Link } from 'react-router-dom';

import styles from './MainNavigation.module.css';

const MainNavigation = () => {
  return(
    <header className={styles.header}>
      <div className={styles.logo}>React Meetups</div>
      <nav>
        <ul>
          <li><Link to='/'>All Meetups</Link></li>
          <li><Link to='/favourites'>Favourites</Link></li>
          <li><Link to='/new-meetup'>Add a meetup</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;