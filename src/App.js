import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import Home from './pages/home';
import Gifts from './pages/gifts';
import Location from './pages/location';
import OurStory from './pages/ourstory';
import RSVP from './pages/rsvp';

import NavBar from './components/navbar';
import Footer from './components/footer';

import couple from './media/hero.png';
import coupleMobile from './media/hugging.jpg';
import giftsMobile from './media/giftsMobile.JPG';
import giftsDesktop from './media/giftsDesktop.JPG';
import videoBackground from './media/movingbackground.mp4'

const App = () => {
  return (
    <Router>
      <Main />
    </Router>
  );
};

const Main = () => {
  const location = useLocation();
  const [backgroundImage, setBackgroundImage] = useState(couple);
  const [giftsImage, setGiftImage] = useState(giftsDesktop);

  useEffect(() => {
    const handleResize = () => {
      // Adjust the background based on screen size
      if (window.innerWidth <= 768) {
        setBackgroundImage(coupleMobile);
        setGiftImage(giftsMobile);
      } else {
        setBackgroundImage(couple);
        setGiftImage(giftsDesktop);
      }
    };

    // Run the resize handler on initial load
    handleResize();
    window.addEventListener('resize', handleResize);

    // Clean up the resize listener on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

    // Change background based on route
    useEffect(() => {
      const html = document.documentElement; // Access the <html> tag
  
      // Reset any background styling before applying new ones
      html.style.backgroundImage = '';
      html.style.background = '';
  
      // Set different backgrounds for other pages
      if (location.pathname === '/gifts') {
        html.style.backgroundImage = `url(${giftsImage})`;
        html.style.backgroundSize = 'cover';
        html.style.backgroundPosition = 'center';
        html.style.backgroundRepeat = 'no-repeat';
      } else if (location.pathname === '/ourstory') {
        html.style.backgroundImage = 'url(/path/to/ourstory.jpg)';
        html.style.backgroundSize = 'cover';
        html.style.backgroundPosition = 'center';
        html.style.backgroundRepeat = 'no-repeat';
      } else if (location.pathname !== '/rsvp') {
        // For all other pages, including home, use the dynamic background image
        html.style.backgroundImage = `url(${backgroundImage})`;
        html.style.backgroundSize = 'cover';
        html.style.backgroundPosition = 'center';
        html.style.backgroundRepeat = 'no-repeat';
      }
    }, [backgroundImage, location]);

  return (
    <div>
      {/* Render the video background only for the /rsvp route */}
      {location.pathname === '/rsvp' && (
        <video
          autoPlay
          muted
          loop
          playsInline
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: '-1',
          }}
        >
          <source src={videoBackground} type="video/mp4" />
        </video>
      )}
      <NavBar />

      {/* Transition between pages */}
      <TransitionGroup>
        <CSSTransition key={location.pathname} timeout={500} classNames="fade" unmountOnExit>
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/gifts" element={<Gifts />} />
            <Route path="/location" element={<Location />} />
            <Route path="/ourstory" element={<OurStory />} />
            <Route path="/rsvp" element={<RSVP />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>

      <Footer />
    </div>
  );
};


export default App;
