import React from 'react';

const candidates = ['Candidate 1', 'Candidate 2', 'Candidate 3'];
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import "./Dashbord.css"
const Voting = ({ onVote }) => {
    const Navigate = useNavigate();
  const handleVote = (candidate) => {
    onVote(candidate);
  };
const BackLogIn=()=>{
   Navigate(-1);
}
  return (
    <div>
        <nav className="nav">
    <Link to="/DashBoard">Home</Link>
    <Link to="/Result">Result</Link>
    <Link to="/Voting">Voting</Link>
    <Link to="/Confirmation">Confirmation</Link>

    
  </nav>
      <h1>Voting Page</h1>
      {candidates.map((candidate) => (
        <div key={candidate}>
          <span>{candidate}</span>
          <button onClick={() => handleVote(candidate)}>Vote</button>
          <button onClick={() => BackLogIn()}>Back Log In</button>
        </div>
      ))}
    </div>
  );
};

export default Voting;
