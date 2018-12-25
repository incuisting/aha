import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => (
  <ul>
    <li>
      <NavLink to="/" activeClassName="home">
        home
      </NavLink>
    </li>
    <li>
      <NavLink to="/counter" activeClassName="counter">
        counter
      </NavLink>
    </li>
  </ul>
);
export default Nav;
