import React from 'react';
import { Link } from 'react-router-dom';
import { arrow } from '../assets/icons';

const InfoBox = ({ text, link, btnText }) => (
  <div className='info-box'>
    <p className='font-medium sm: text-xl text-center '>{text}</p>
    <Link to={link} className='neo-brutalism-white neo-btn'>
      {btnText}
      <img src={arrow} className='w-4 h-4 object-contain' />
    </Link>
  </div>
);

const renderContent = {
  1: (
    <h1 className='sm: text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
      Hi, I am <span className='font-semibold'>Mikey</span> 👋
      <br />A Frontend Developer from 🇹🇼
    </h1>
  ),
  2: (
    <InfoBox
      text='A Self-taught Frontend Developer and on My Way to Achieve Greatness'
      link='/about'
      btnText='Learn more'
    />
  ),
  3: (
    <InfoBox
      text='Curious about My Previous Work? Feel free to take a look 😃'
      link='/projects'
      btnText='Visit my portfolio'
    />
  ),
  4: (
    <InfoBox
      text="Need to find a Developer? I'm just a few keystrokes away 📲"
      link='/contact'
      btnText="Let's talk"
    />
  ),
};

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default HomeInfo;
