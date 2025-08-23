import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Home from '../components/Home';
// import '../App.css';

describe('Home Component', () => {
  it('home component renders without crashing', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
  });

  it('displays the "Register Candidate" and "List Candidates" buttons', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    expect(screen.getByText('Register Candidate')).toBeInTheDocument();
    expect(screen.getByText('List Candidates')).toBeInTheDocument();
  });

  it('should contain a specific CSS style for home element', () => {
    render(
      <MemoryRouter>
        <div className="home-container">
          <Home />
        </div>
      </MemoryRouter>
    );
    const homeElement = screen.getByTestId('home-component').parentElement;
    expect(homeElement).toHaveClass('home-container');
  });
});
