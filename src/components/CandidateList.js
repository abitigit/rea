import React, { useState, useEffect } from 'react';
import ProfileCard from './ProfileCard';

function CandidateList({ candidates }) {
  const [searchText, setSearchText] = useState('');
  const [filteredCandidates, setFilteredCandidates] = useState(candidates);

  useEffect(() => {
    setFilteredCandidates(candidates);
  }, [candidates]);

  const handleSearch = () => {
    if (searchText.trim() === '') {
      setFilteredCandidates(candidates);
    } else {
      const lowercasedSearchText = searchText.toLowerCase();
      const filtered = candidates.filter(candidate =>
        candidate.skills.some(skill =>
          skill.toLowerCase().includes(lowercasedSearchText)
        )
      );
      setFilteredCandidates(filtered);
    }
  };

  const handleListAll = () => {
    setSearchText('');
    setFilteredCandidates(candidates);
  };

  return (
    <div className="list-container" data-testid="candidate-list-component">
      <div className="search-box-container">
        <input
          type="text"
          placeholder="Search by skill..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="search-box"
          data-testid="search-input"
        />
        <button onClick={handleSearch} className="search-button" data-testid="search-button">
          Search
        </button>
        <button onClick={handleListAll} className="list-all-button" data-testid="list-all-button">
          List All
        </button>
      </div>
      <div className="profile-cards-container">
        {filteredCandidates.length > 0 ? (
          filteredCandidates.map(candidate => (
            <ProfileCard key={candidate.id} candidate={candidate} />
          ))
        ) : (
          <p className="no-candidates-message" data-testid="no-candidates-message">
            No candidates found. Try a different search or add a new candidate.
          </p>
        )}
      </div>
    </div>
  );
}

export default CandidateList;
