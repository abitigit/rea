import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Home from "./components/Home";
import CandidateRegistration from "./components/CandidateRegistration";
import CandidateList from "./components/CandidateList";
import Navbar from "./components/Navbar";
import "./App.css";

const Layout = ({ candidatesCount }) => {
  return (
    <div>
      <Navbar candidatesCount={candidatesCount} />
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
};

function App() {
  const [candidates, setCandidates] = useState([]);

  const addCandidate = (candidate) => {
    setCandidates((prevCandidates) => [...prevCandidates, candidate]);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout candidatesCount={candidates.length} />}>
          <Route index element={<Home />} />
          <Route
            path="candidate/registration"
            element={
              <CandidateRegistration
                addCandidate={addCandidate}
                candidates={candidates}
              />
            }
          />
          <Route
            path="candidate/list"
            element={<CandidateList candidates={candidates} />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
