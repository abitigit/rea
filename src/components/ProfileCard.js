import React from 'react';

function ProfileCard({ candidate }) {
  return (
    <div className="profile-card" data-testid={`candidate-card-${candidate.id}`}>
      <h2>{candidate.name}</h2>
      <p><strong>Email:</strong> {candidate.email}</p>
      <p><strong>Role:</strong> {candidate.role}</p>
      <div className="skills-container">
        {candidate.skills.map((skill, index) => (
          <span key={index} className="skill-tag">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default ProfileCard;
