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

const App = () => {
  return (
    <Router>
      <Main />
    </Router>
  );
};

const Main = () => {
  const location = useLocation();

  return (
    <div>
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
