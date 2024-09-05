import React, {useState} from 'react';
import Background from '../media/movingbackground.mp4'
import Image from '../media/SaveTheDate.png'

const RSVP = () => {
  const [invitation, setInvitationValue] = useState('');
  const [guest, setGuestValue] = useState('');
  
  return <div className='rsvp'>
    <video autoPlay muted loop className='background-video'>
      <source src={Background} type='video/mp4' />
    </video>
    <div className='container'>


      <div className='photo'>
        <img className="img-1" src={Image}></img>
        <img className="img-2" src={Image}></img>
      </div>
      <div className='info'>
      <h1>RSVP</h1>
        <div className='verify'>
          <p>To ensure we have everything prepared for your arrival, we kindly request that you RSVP as soon as possible. Your response will help us plan the perfect celebration and make sure everyone has a wonderful time.</p>
          <input type='text' value={invitation}  placeholder='Insert Invitation Code'/>
          <button>Submit</button>
        </div>
        <div className='sign-in'>
          <div className='next-to-each-other'>
            <input type='text' value={guest} placeholder='Name:'/>
            <input type='text' value={guest} placeholder='Name:'/>
          </div>
          <input type='text' value={guest} placeholder='Name:'/>
          <input type='text' value={guest} placeholder='Name:'/>
          <button>Submit</button>
        </div>
      </div>
    </div>

  </div>;
};

export default RSVP;