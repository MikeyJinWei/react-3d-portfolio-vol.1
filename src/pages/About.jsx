import React from 'react';
import {
  experiences,
  frameworksOrPkgs,
  languages,
  tools,
} from '../constants/index';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import CTA from '../components/CTA';

const About = () => {
  return (
    <section className='max-container w-full bg-[#202023]'>
      <h1 className='head-text text-[#FDF4E3]'>
        Hello 我是
        <span className='blue-gradient_text font-semibold drop-shadow'>
          黃勁偉 (Mikey)
        </span>
      </h1>

      <div className='mt-5 flex flex-col gap-3 md:text-xl text-slate-300'>
        <p>
          我是一名前端開發者，在求學和就業的旅途中，我透過一次次的實作開始對網頁開發產生興趣，並每天致力於進步
        </p>
      </div>

      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text text-[#FDF4E3]'>學習過的語言</h3>

        <div className='mt-16 flex flex-wrap gap-9 md:gap-9 justify-center xl:justify-start'>
          {languages.map((language) => (
            <div key={language.name}>
              <div className='block-container w-16 h-16 md:w-20 md:h-20'>
                <div className='btn-back rounded-xl' />
                <div className='btn-front rounded-xl flex justify-evenly items-center'>
                  <img
                    src={language.imageUrl}
                    alt={language.name}
                    className='w-1/2 h-1/2 object-contain'
                  />
                </div>
              </div>
              <div
                key={language.name}
                className='flex justify-center flex-wrap w-16 md:w-20 mt-1.5 text-center text-xs md:text-sm text-[#eeeeee]'
              >
                <p className=''>{language.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text text-[#eeeeee]'>學習過的框架/套件</h3>
        <div className='mt-16 flex flex-wrap gap-9 md:gap-9 justify-center xl:justify-start'>
          {frameworksOrPkgs.map((frameworkOrPkg) => (
            <div key={frameworkOrPkg.name} className=''>
              <div className='block-container w-16 h-16 md:w-20 md:h-20'>
                <div className='btn-back rounded-xl' />
                <div className='btn-front rounded-xl flex justify-evenly items-center'>
                  <img
                    src={frameworkOrPkg.imageUrl}
                    alt={frameworkOrPkg.name}
                    className='w-1/2 h-1/2 object-contain'
                  />
                </div>
              </div>
              <div
                key={frameworkOrPkg.name}
                className='flex justify-center flex-wrap w-16 md:w-20 mt-1.5 text-center text-xs md:text-sm text-[#eeeeee]'
              >
                <p className=''>{frameworkOrPkg.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text text-[#FDF4E3]'>學習過的工具</h3>
        <div className='mt-16 flex flex-wrap gap-9 md:gap-9 justify-center xl:justify-start'>
          {tools.map((tool) => (
            <div key={tool.name} className=''>
              <div className='block-container w-16 h-16 md:w-20 md:h-20'>
                <div className='btn-back rounded-xl' />
                <div className='btn-front rounded-xl flex justify-evenly items-center'>
                  <img
                    src={tool.imageUrl}
                    alt={tool.name}
                    className='w-1/2 h-1/2 object-contain'
                  />
                </div>
              </div>
              <div
                key={tool.name}
                className='flex justify-center flex-wrap w-16 md:w-20 mt-1.5 text-center text-xs md:text-sm text-[#eeeeee]'
              >
                <p className=''>{tool.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='py-16'>
        <h3 className='subhead-text'>工作經驗</h3>
        <div className='mt-5 flex flex-col gap-3 md:text-xl text-slate-300'>
          <p>
            我認真看待每一份工作，秉持著「見賢思齊」的心態；面對工作，我偏好理性的思考，並在溝通及考量各種因素後做出最佳的決策：
          </p>
        </div>
        <div className='mt-12 flex'>
          <VerticalTimeline>
            {experiences.map((experience) => (
              <VerticalTimelineElement
                className='text-[#eeeeee]'
                key={experience.company_name}
                date={experience.date}
                icon={
                  <div className='flex justify-center items-center w-full h-full'>
                    <img
                      src={experience.icon}
                      alt={experience.company_name}
                      className='w-[60%] h-[60%] object-contain'
                    />
                  </div>
                }
                contentStyle={{
                  background: '#000000',
                  borderBottom: '8px',
                  borderStyle: 'solid',
                  borderBottomColor: experience.iconBg,
                  boxShadow: 'none',
                }}
                iconStyle={{ background: experience.iconBg }}
              >
                <div>
                  <h3 className='text-[#eeeeee] text-xl font-poppins font-semibold'>
                    {experience.title}
                  </h3>
                  <p
                    className='text-[#eeeeee] font-medium font-base'
                    style={{ margin: 0 }}
                  >
                    {experience.company_name}
                  </p>
                </div>
                <ul className='my-5 list-disc ml-5 space-y-2'>
                  {experience.points.map((point, index) => (
                    <li
                      key={`experience-point-${index}`}
                      className='text-[#eeeeee] font-normal pl-1 text-base'
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

      <hr className='border-slate-200' />

      <CTA />
    </section>
  );
};

export default About;
