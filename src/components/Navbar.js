import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useUser } from '../UserContext';
import './Navbar.css';

const Navbar = () => {
  const { user, setUser } = useUser();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    navigate('/login');
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="nav">
      <div className="logo">Event Management Portal</div>
      <div className="nav-links">
        <Link className="nav-link" to="/">Home</Link>
        <Link className="nav-link" to="/about">About</Link>
        <Link className="nav-link" to="/contact">Contact</Link>
        {!user ? (
          <>
            <Link className="nav-link" to="/login">Login</Link>
            <Link className="nav-link" to="/register">Register</Link>
          </>
        ) : (
          <div className="nav-user">
            <div onClick={toggleDropdown} className="nav-link">
              {user.firstName}
            </div>
            {dropdownOpen && (
              <div className="dropdown">
                <Link className="dropdown-link" to="/profile">Profile</Link>
                {user.email === 'admin@gmail.com' && (
                  <>
                    <Link className="dropdown-link" to="/admin/manage-events">Manage Events</Link>
                    <Link className="dropdown-link" to="/admin/manage-users">Manage Users</Link>
                  </>
                )}
                <button className="dropdown-link logout-button" onClick={handleLogout}>Logout</button>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
