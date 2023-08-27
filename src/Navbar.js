import React from 'react';
import './Navbar.css'; // Import your CSS file for styling

function Navbar() {
  return (
   <div className='nav'>
     <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item"> <a href="https://sciastra.com">
        <img src="https://www.sciastra.com/Assets/Images/newsciastra.jpg" alt="SciAstra Logo" style={{ borderRadius: '50%' }} />
      </a></li>
        <li className="nav-item"><a href="/">Home</a></li>
        <li className="nav-item"><a href="/">Courses</a></li>
        <li className="nav-item"><a href="/about">About</a></li>
        <li className="nav-item"><a href="/contact">Contact</a></li>
      </ul>
    </nav>
    <h1 className="large">SciAstra</h1>
    <h2 className='small'>For the love of Science</h2>
   </div>
  );
}

export default Navbar;
