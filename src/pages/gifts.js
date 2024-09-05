import React from 'react';
import '../App.css'; // Import the CSS file for styling

const Gifts = () => {
  return <div className='gifts'>
    <div>
      <h1>GIFTS</h1>
      <p>Your presence at our wedding is the greatest gift we ould ask for. If you wish to honor us with a gift, we have registered for items that will help us start our new life together</p>
      <div className='registry'>
        <a href='www.amazon.com'>amazon</a>
        <a href='www.target.com'>target</a>
        <a href='www.bedbathandbeyond.com'>bedbathandbeyond</a>
      </div>
    </div>

  </div>;
};

export default Gifts;