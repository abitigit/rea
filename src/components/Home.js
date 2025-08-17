import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home-container" data-testid='home-component'>
      <Link to="/candidate/registration" data-testid="registration-btn">
        Register Candidate
      </Link>
      <Link to="/candidate/list" data-testid="list-btn">
        List Candidates
      </Link>
    </div>
  );
}

export default Home;
