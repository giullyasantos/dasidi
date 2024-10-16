import React, { useEffect, useState } from 'react';
import '../App.css'; // Import the CSS file for styling
import couple from '../media/hero.png';
import coupleMobile from '../media/hugging.jpg';


const Home = () => {
  
  return (
    <section className="home-container">
      <div className="content">
        <h1>Welcome to the Beginning of Our Forever</h1>
        <p>Take a moment to explore, learn about our story, and find all the details you need to be a part of our special day.</p> 
        <p>We can't wait to share these precious moments with you.</p>
      </div>
    </section>
  );
};

export default Home;