import React, {useState} from 'react';
import Image from '../media/Tezza-5068.jpg'
import Image2 from '../media/Tezza-5983.jpg'

const RSVP = () => {
  const [invitation, setInvitationValue] = useState('');
  const [guest, setGuestValue] = useState('');
  
  return <div className='rsvp'>
    <div className='container'>
      <div className='photo'>
        <img className="img-2" src={Image2}></img>
      </div>
      <div className='info'>
      <h1>RSVP</h1>
        <div className='verify'>
          <p>To ensure we have everything prepared for your arrival, we kindly request that you RSVP as soon as possible. Your response will help us plan the perfect celebration and make sure everyone has a wonderful time.</p>
          <input type='text' placeholder='Insert Invitation Code'/>
          <button>Submit</button>
        </div>
        <div className='sign-in'>
          <div className='next-to-each-other'>
            <input type='text'  placeholder='Name:'/>
            <input type='text'  placeholder='Name:'/>
          </div>
          <input type='text'  placeholder='Name:'/>
          <input type='text'  placeholder='Name:'/>
          <button>Submit</button>
        </div>
      </div>
    </div>

  </div>;
};

export default RSVP;