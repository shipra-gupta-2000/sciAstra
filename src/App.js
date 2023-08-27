import React from 'react';
import './App.css';
import { FaUniversity, FaUser } from 'react-icons/fa';
import Navbar from './Navbar';

const universities = [
  { name: 'University 1', logo: <FaUniversity /> },
  { name: 'University 2', logo: <FaUniversity /> },
  { name: 'University 3', logo: <FaUniversity /> },
  { name: 'University 4', logo: <FaUniversity /> },
  { name: 'University 1', logo: <FaUniversity /> },
  { name: 'University 2', logo: <FaUniversity /> },
  { name: 'University 3', logo: <FaUniversity /> },
  { name: 'University 4', logo: <FaUniversity /> },
];

const mentors = [
  { name: 'Mentor 1', logo: <FaUser /> },
  { name: 'Mentor 2', logo: <FaUser /> },
  { name: 'Mentor 3', logo: <FaUser /> },
  { name: 'Mentor 4', logo: <FaUser /> },
  { name: 'Mentor 1', logo: <FaUser /> },
  { name: 'Mentor 2', logo: <FaUser /> },
  { name: 'Mentor 3', logo: <FaUser /> },
  { name: 'Mentor 4', logo: <FaUser /> },
];

const advisors = [
  { name: 'Advisor 1', logo: <FaUser /> },
  { name: 'Advisor 2', logo: <FaUser /> },
  { name: 'Advisor 3', logo: <FaUser /> },
  { name: 'Advisor 4', logo: <FaUser /> },
  { name: 'Advisor 1', logo: <FaUser /> },
  { name: 'Advisor 2', logo: <FaUser /> },
  { name: 'Advisor 3', logo: <FaUser /> },
  { name: 'Advisor 4', logo: <FaUser /> },
];

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
      <h1 className='page-title'>Learn from scientists , research scholars from the top institues of the world </h1>
        <div className="section">
          <h2 className="section-title">Universities</h2>
          <div className="item-grid">
            {universities.map((uni, index) => (
              <div className="item" key={index}>
                <div className="item-logo">{uni.logo}</div>
                <div className="item-name">{uni.name}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="section">
          <h2 className="section-title">Meet Your Mentors</h2>
          <div className="item-grid">
            {mentors.map((mentor, index) => (
              <div className="item" key={index}>
                <div className="item-logo">{mentor.logo}</div>
                <div className="item-name">{mentor.name}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="section">
          <h2 className="section-title">Mentor And Advisors</h2>
          <div className="item-grid">
            {advisors.map((advisor, index) => (
              <div className="item" key={index}>
                <div className="item-logo">{advisor.logo}</div>
                <div className="item-name">{advisor.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
