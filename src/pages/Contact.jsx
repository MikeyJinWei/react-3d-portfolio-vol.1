import React, { Suspense, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Canvas } from '@react-three/fiber';
import Loader from '../components/Loader';
import { Fox } from '../models/Fox';

const Contact = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
      [e.target.email]: e.target.value,
      [e.target.message]: e.target.value,
    });
  };

  const handleFocus = () => {};

  const handleBlur = () => {};

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .send(
        'service_p3mawnj',
        'template_22ap6zl',
        {
          from_name: form.name,
          to_name: 'Mikey',
          from_email: form.email,
          to_email: 'currygeigei@gmail.com',
          message: form.message,
        },
        'QkJ9OCTB61Ytj38W4',
      )
      .then(() => {
        setIsLoading(false);
        // TODO: Alert to how success message
        // TODO: Hide the alert
        setForm({ name: '', email: '', message: '' });
      })
      .catch((error) => {
        setIsLoading(false);
        console.log(error);
        // TODO: show error message
      });
  };

  return (
    <section className='relative flex lg:flex-row flex-col max-container'>
      <div className='flex-1 min-w-[50%] flex flex-col'>
        <h1 className='head-text'>與我聯絡</h1>

        <form
          onSubmit={handleSubmit}
          className='w-full flex flex-col gap-7 mt-14'
        >
          <label className='text-black-500 font-semibold'>
            姓名
            <input
              type='text'
              name='name'
              className='input'
              placeholder='Ex: John'
              required
              value={form.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className='text-black-500 font-semibold'>
            Email
            <input
              type='email'
              name='email'
              className='input'
              placeholder='Ex: john@gmail.com'
              required
              value={form.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className='text-black-500 font-semibold'>
            留言
            <textarea
              type='text'
              name='message'
              className='textarea'
              rows={4}
              placeholder='Let me know how I can help you!'
              required
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <button
            className='btn'
            type='submit'
            onFocus={handleFocus}
            onBlur={handleBlur}
          >
            {isLoading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
      <div className='lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]'>
        <Canvas
          camera={{
            position: [0, 0, 5],
          }}
        >
          <Fox
            position={[0.5, 0.35, 0]}
            rotation={[12, 0, 0]}
            scale={[0.5, 0.5, 0.5]}
          />
        </Canvas>
      </div>
    </section>
  );
};

export default Contact;
