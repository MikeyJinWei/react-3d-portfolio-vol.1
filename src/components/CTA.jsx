import React from 'react';
import { Link } from 'react-router-dom';

const CTA = () => {
  return (
    <section className='cta'>
      <p className='cta-text'>
        在尋找開發夥伴嗎？{'  '}
        <br className='sm:block hidden' />
        讓我們一起來建置專案吧！
      </p>
      <Link to='/contact' className='btn'>
        Contact
      </Link>
    </section>
  );
};

export default CTA;
