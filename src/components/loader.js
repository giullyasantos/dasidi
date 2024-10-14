import React from 'react';
import '../App.css'; // Ensure you have the correct styles

const Loader = ({ isLoading }) => {
  return (
    <div className={`loader-container ${isLoading ? '' : 'hidden'}`}>
      <div className="loader">
        Loading...
      </div>
    </div>
  );
};

export default Loader;
