import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import CandidateRegistration from '../components/CandidateRegistration'


describe('Candidate Registration Component', () => {

    it('candidate registration component renders without crashing', () => {
      render(
        <MemoryRouter>
          <CandidateRegistration />
        </MemoryRouter>
      );
    });

    it('displays the registration form', () => {
      render(
        <MemoryRouter>
          <CandidateRegistration />
        </MemoryRouter>
      );
  
      expect(screen.getByPlaceholderText('Name')).toBeInTheDocument();
      expect(screen.getByPlaceholderText('Role')).toBeInTheDocument();
    });
  
    it('limits the number of skills to a maximum of 5', () => {
      render(
        <MemoryRouter>
          <CandidateRegistration />
        </MemoryRouter>
      );
  
      const addSkillButton = screen.getByTestId('add-skill-btn');
      const skillInput = screen.getByTestId('form-input-skill');
  
      for (let i = 0; i < 6; i++) {
        fireEvent.change(skillInput, { target: { value: 'Skill ' + i } });
        fireEvent.click(addSkillButton);
      }
  
      const skillTags = screen.queryAllByTestId(/skill-tag/);
  
      expect(skillTags).toHaveLength(5);
    });
});