import React, { useEffect, useState } from 'react';
import '../App.css'; // Import the CSS file for styling
import couple from '../media/hero.png';
import coupleMobile from '../media/hugging.jpg';


const Home = () => {
  const [imageSrc, setImageSrc] = useState(couple);

  useEffect(() => {
    const handleResize = () => {
      // If screen width is less than or equal to 768px, use the smaller image
      if (window.innerWidth <= 768) {
        setImageSrc(coupleMobile);
      } else {
        setImageSrc(couple); // Default large image for larger screens
      }
    };

    // Run the function initially and also whenever the window resizes
    handleResize();
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return (
    <div className="home-container">
      <img className="background" src={imageSrc} alt="Damaris and Sidiclei Souza"></img>

      <div className="content">
        <h1>Welcome to the Beginning of Our Forever</h1>
        <p>Take a moment to explore, learn about our story, and find all the details you need to be a part of our special day.</p> 
        <p>We can't wait to share these precious moments with you.</p>
      </div>
    </div>
  );
};

export default Home;