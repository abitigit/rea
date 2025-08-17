import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();

  const getNavLinks = () => {
    switch (location.pathname) {
      case '/candidate/registration':
        return (
          <>
            <Link to="/" data-testid="nav-home-btn">Home</Link>
            <Link to="/candidate/list" data-testid="nav-list-btn">Candidate List</Link>
          </>
        );
      case '/candidate/list':
        return (
          <>
            <Link to="/" data-testid="nav-home-btn">Home</Link>
            <Link to="/candidate/registration" data-testid="nav-registration-btn">Candidate Registration</Link>
          </>
        );
      default:
        return (
          <>
            <Link to="/candidate/registration" data-testid="nav-registration-btn">Candidate Registration</Link>
            <Link to="/candidate/list" data-testid="nav-list-btn">Candidate List</Link>
          </>
        );
    }
  };

  return (
    <header>
      <h1>Job Portal</h1>
      <nav>
        {getNavLinks()}
      </nav>
    </header>
  );
}

export default Navbar;
