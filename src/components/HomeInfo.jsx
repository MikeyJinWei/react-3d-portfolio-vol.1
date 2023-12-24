import React from 'react';
import { Link } from 'react-router-dom';
import { arrow } from '../assets/icons';

const InfoBox = ({ text, link, btnText }) => (
  <div className='info-box'>
    <p className='font-medium sm: text-xl text-center'>{text}</p>
    <Link to={link} className='neo-brutalism-light-grey neo-btn'>
      {btnText}
      <img src={arrow} className='w-4 h-4 object-contain' />
    </Link>
  </div>
);

const renderContent = {
  1: (
    <h1 className='sm: text-xl sm:leading-snug text-center neo-brutalism-grey py-4 px-8 text-white mx-5'>
      Hi, 我是 <span className='font-semibold'>Mikey</span> 👋
      <br />
      我是一名前端開發人員
    </h1>
  ),
  2: (
    <h1 className='sm: text-xl sm:leading-snug text-center neo-brutalism-grey py-4 px-8 text-white mx-5'>
      我自學前端開發的技術並且，
      <br />
      <span className='font-semibold gold-gradient_text'>每天</span>
      都在持續精進自己的技能
    </h1>
  ),
  3: (
    <InfoBox
      text='對我的作品感到好奇嗎？歡迎參觀我的作品集😃'
      link='/projects'
      btnText='前往參觀'
    />
  ),
  4: (
    <InfoBox
      text='正在尋找前端開發人員嗎？或許我就近在咫尺喔 📲'
      link='/contact'
      btnText='期盼你的聯絡'
    />
  ),
};

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default HomeInfo;
