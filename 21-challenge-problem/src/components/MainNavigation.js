import classes from "./MainNavigation.module.css";
import { Outlet,NavLink } from "react-router-dom";

function MainNavigation() {
  return (
    <>
      <header className={classes.header}>
        <nav>
          <ul className={classes.list}>
            <li>
              <NavLink to={'/'} className={({isActive}) => isActive ? classes.active : undefined}>Home</NavLink>
            </li>
            <li>
              <NavLink to={'/events'} className={({isActive}) => isActive ? classes.active : undefined}>Events</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </>
  );
}

export default MainNavigation;
