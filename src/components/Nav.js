import React from 'react'
import { NavLink, withRouter } from 'react-router-dom'

const Nav = () => {
  return (
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
  )
}
export default Nav
