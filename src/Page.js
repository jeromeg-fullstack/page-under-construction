/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import Logo from './assets/img/logo.png';
import Facebook from './assets/img/fb.png';
import Linkedin from './assets/img/linkedin.png';
import Github from './assets/img/github.png';

const Page = () => {
  const [deadline, setDeadline] = useState('Mar, 16, 2021');
  const [days, setDays] = useState('0');
  const [hours, setHours] = useState('0');
  const [minutes, setMinutes] = useState('0');
  const [seconds, setSeconds] = useState('0');

  const getTimeUntil = deadline => {
    const time = Date.parse(deadline) - Date.parse(new Date());
    if (time < 0) {
      console.log('Date Passed');
    } else {
      setSeconds(Math.floor((time / 1000) % 60));
      setMinutes(Math.floor((time / 1000 / 60) % 60));
      setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
      setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    }
  };

  useEffect(() => {
    setInterval(() => getTimeUntil(deadline), 1000);
  }, []);

  return (
    <div className='bg'>
      <div className='container'>
        <a href='http://jeromeg.herokuapp.com/' className='logo-wrapper'>
          <img src={Logo} alt='logo' />
        </a>
        <div className='message-wrapper'>
          <h1 className='message'>Page Coming Soon</h1>
        </div>
        <div className='countdown-wrapper'>
          <div className='countdown-item'>
            <h2 className='countdown-number'>{days}</h2>
            <h4 className='countdown-tag'>DAYS</h4>
          </div>

          <div className='countdown-item'>
            <h2 className='countdown-number'>{hours}</h2>
            <h4 className='countdown-tag'>HS</h4>
          </div>
          <div className='countdown-item'>
            <h2 className='countdown-number'>{minutes}</h2>
            <h4 className='countdown-tag'>MIN</h4>
          </div>
          <div className='countdown-item'>
            <h2 className='countdown-number'>{seconds}</h2>
            <h4 className='countdown-tag'>SEC</h4>
          </div>
        </div>
        <div className='socmedia-wrapper'>
          <a
            href='https://www.facebook.com/jerome.webdeveloper'
            className='socmedia-item'>
            <img src={Facebook} alt='facebook' />
          </a>
          <a
            href='https://www.linkedin.com/in/jeromegacoscosim/'
            className='socmedia-item'>
            <img src={Linkedin} alt='linkedin' />
          </a>
          <a
            href='https://github.com/jeromeg-fullstack'
            className='socmedia-item'>
            <img src={Github} alt='github' />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Page;
