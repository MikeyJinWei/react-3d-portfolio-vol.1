import React from 'react';
import { projects } from '../constants/index';
import { Link } from 'react-router-dom';
import CTA from '../components/CTA';

const Projects = () => {
  return (
    <section className='max-container bg-[#202023]'>
      <h1 className='head-text'>
        My{' '}
        <span className='blue-gradient_text font-semibold drop-shadow'>
          Projects
        </span>
      </h1>
      <div className='mt-5 flex flex-col gap-3 sm:text-lg md:text-xl text-slate-300'>
        <p>
          在這段學習的旅程中，我透過一次次的專案作品學習，試著讓每個階段的作品越來越完善，歡迎點擊參觀我的
          Source Code！另外，我也十分期待您的聯繫！
        </p>
      </div>

      <div className='flex flex-wrap my-20 gap-x-48 gap-y-16 xl:justify-center'>
        {projects.map((project) => (
          <div className='lg:w-[320px] w-full' key={project.name}>
            <div className='block-container'>
              <Link
                to={project.liveURL}
                target='_blank'
                rel='noopener noreferrer'
                className=''
              >
                <img
                  src={project.img}
                  alt='Project Image'
                  className='w-96 text-[#EEEEEE] hover:opacity-60 transition-all duration-700 ease-out'
                />
              </Link>
              {/* <div className={`btn-back rounded-xl ${project.theme}`} />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={project.iconUrl}
                  alt='Project Icon'
                  className='w-1/2 h-1/2 object-contain'
                />
              </div> */}
            </div>
            <div className='mt-5 flex flex-col'>
              <h4 className='text-3xl font-semibold text-[#eeeeee]'>
                {project.name}
              </h4>
              <p className='mt-2 text-slate-300'>{project.description}</p>
              <div className='mt-5 flex flex-col gap-2 font-poppins'>
                <Link
                  to={project.sourceCode}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='font-semibold text-blue-600 hover:text-indigo-300 transition-all duration-300 ease-in-out'
                >
                  Source Code →
                </Link>
                <Link
                  to={project.liveURL}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='font-semibold text-indigo-400 hover:text-indigo-300 transition-all duration-300 ease-in-out'
                >
                  參觀網站 →
                </Link>
                {/* <img
                  src={arrow}
                  alt='arrow'
                  className='w-4 h-4 object-contain'
                /> */}
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr className='border-slate-200' />
      <CTA />
    </section>
  );
};

export default Projects;
