import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import CandidateList from '../components/CandidateList';

describe('Candidate List Component', () => {
  it('candidate list component renders without crashing', () => {
    render(
      <MemoryRouter>
        <CandidateList candidates={[]} />
      </MemoryRouter>
    );
  });

  it('displays the "Search by skill..." input', () => {
    render(
      <MemoryRouter>
        <CandidateList candidates={[]} />
      </MemoryRouter>
    );

    expect(screen.getByPlaceholderText('Search by skill...')).toBeInTheDocument();
  });

  it('displays the "List All" button', () => {
    render(
      <MemoryRouter>
        <CandidateList candidates={[]} />
      </MemoryRouter>
    );

    expect(screen.getByText('List All')).toBeInTheDocument();
  });
});