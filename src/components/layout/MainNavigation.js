import {Link} from 'react-router-dom';

import classes from './MainNavigation.module.css';

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div>React Meetups</div>
      <ul>
        <li><Link to='/'>All Meetups</Link></li>
        <li><Link to='/new-meetup'>Add new Meetup</Link></li>
        <li><Link to='/favorites'>Favorites</Link></li>
      </ul>
    </header>
  )
}

export default MainNavigation