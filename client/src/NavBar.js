import React from 'react';
import { Link } from 'react-router-dom';

export const NavBar = props => {

  const { loggedIn, onLogout } = props

  return (
    <nav className="navbar">
      <div className="navbar-start">
        <Link className="navbar-item" to="/">Home</Link>
        {loggedIn && <Link className="navbar-item" to="/jobs/new">Post Job</Link>}
        {loggedIn ? <a className="navbar-item" onClick={onLogout}>Logout</a> : <Link className="navbar-item" to="/login">Login</Link>}
      </div>
    </nav>
  )
}
