import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import Home from './pages/home';
import Gifts from './pages/gifts';
import Location from './pages/location';
import OurStory from './pages/ourstory';
import RSVP from './pages/rsvp';

import NavBar from './components/navbar';

const App = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <Main />
      </div>
    </Router>
  );
};

const Main = () => {
  const location = useLocation();
  return (
    <TransitionGroup>
      <CSSTransition
        key={location.pathname}
        timeout={300}
        classNames="fade"
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/gifts" element={<Gifts />} />
          <Route path="/location" element={<Location />} />
          <Route path="/ourstory" element={<OurStory />} />
          <Route path="/rsvp" element={<RSVP />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default App;