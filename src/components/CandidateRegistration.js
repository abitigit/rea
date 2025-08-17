import React, { useState, useEffect } from 'react';

function CandidateRegistration({ addCandidate, candidates }) {
  const initialFormData = {
    name: '',
    email: '',
    role: '',
    skill: '',
    skills: [],
  };

  const [formData, setFormData] = useState(initialFormData);
  const [registrationStatus, setRegistrationStatus] = useState(null);
  const [emailError, setEmailError] = useState(false);
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);

  useEffect(() => {
    const { name, email, role, skills } = formData;
    const isValid = name.trim() !== '' && email.trim() !== '' && role.trim() !== '' && skills.length > 0;
    setIsSubmitDisabled(!isValid);
  }, [formData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (name === 'email') {
      setEmailError(false);
      setRegistrationStatus(null);
    }
  };

  const handleAddSkill = () => {
    if (formData.skill.trim() && formData.skills.length < 5) {
      setFormData({
        ...formData,
        skills: [...formData.skills, formData.skill.trim()],
        skill: '',
      });
    }
  };

  const handleReset = () => {
    setFormData(initialFormData);
    setRegistrationStatus(null);
    setEmailError(false);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const emailExists = candidates.some(
      (candidate) => candidate.email.toLowerCase() === formData.email.toLowerCase()
    );

    if (emailExists) {
      setRegistrationStatus('Email already exists');
      setEmailError(true);
      return;
    }

    addCandidate({
      id: Date.now(),
      name: formData.name,
      email: formData.email,
      role: formData.role,
      skills: formData.skills,
    });
    setRegistrationStatus('Candidate profile created');
    setEmailError(false);
    setTimeout(() => {
      handleReset();
    }, 2000);
  };

  return (
    <div className="registration-container" data-testid="registration-component">
      <div className="form-box">
        <form onSubmit={handleFormSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleInputChange}
              data-testid="form-input-name"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              className={emailError ? 'highlight' : ''}
              data-testid="form-input-email"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="role"
              placeholder="Role"
              value={formData.role}
              onChange={handleInputChange}
              data-testid="form-input-role"
              required
            />
          </div>
          <div className="form-group">
            <div className="skill-input-container">
              <input
                type="text"
                name="skill"
                placeholder="Skill"
                value={formData.skill}
                onChange={handleInputChange}
                data-testid="form-input-skill"
              />
              <button type="button" onClick={handleAddSkill} className="add-skill-btn" data-testid="add-skill-btn">
                Add Skill
              </button>
            </div>
            <div className="skill-tag-container">
              {formData.skills.map((skill, index) => (
                <div key={index} className="skill-tag" data-testid={`skill-tag-${index}`}>
                  {skill}
                </div>
              ))}
            </div>
          </div>
          <div className="button-group">
            <button type="submit" className="form-button" disabled={isSubmitDisabled} data-testid="register-btn">
              Register
            </button>
            <button type="button" onClick={handleReset} className="form-button" data-testid="reset-btn">
              Reset
            </button>
          </div>
        </form>
        {registrationStatus && (
          <div
            className={`alert-message ${registrationStatus === 'Candidate profile created' ? 'success' : 'error'}`}
            data-testid="alert-message"
          >
            {registrationStatus}
          </div>
        )}
      </div>
    </div>
  );
}

export default CandidateRegistration;
