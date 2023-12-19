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
      Hi, 我是 <span className='font-semibold'>Mikey</span> 👋
      <br />
      我是一個前端開發者
    </h1>
  ),
  2: (
    <InfoBox
      text='我自學前端開發的技術並正在持續精進自己的技能'
      link='/about'
      btnText='Learn more'
    />
  ),
  3: (
    <InfoBox
      text='對我的作品感到好奇嗎? 歡迎參觀我的作品集 😃'
      link='/projects'
      btnText='參觀我的作品集'
    />
  ),
  4: (
    <InfoBox
      text='正在尋找前端開發者嗎？ 我就近在咫尺喔 📲'
      link='/contact'
      btnText="Let's talk"
    />
  ),
};

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default HomeInfo;
