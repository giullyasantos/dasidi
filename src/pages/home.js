import React from 'react';
import '../App.css'; // Import the CSS file for styling
import Couple from '../media/couplebackground.mp4'


const Home = () => {
  return (
    <div className="home-container">
      <video autoPlay muted loop className='background-video'>
        <source src={Couple} type='video/mp4' />
      </video>

      <div className="content">
        <h1>Welcome to the Beginning of Our Forever</h1>
        <p>Take a moment to explore, learn about our story, and find all the details you need to be a part of our special day.</p> 
        <p>We can't wait to share these precious moments with you.</p>
      </div>
    </div>
  );
};

export default Home;