import React, { Suspense, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Canvas } from '@react-three/fiber';
import Loader from '../components/Loader';
import Fox from '../models/Fox';

import Rubik from '../models/Rubik';

import useAlert from '../hooks/useAlert';
import Alert from '../components/Alert';

const Contact = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState('Armature|Loop');

  const { alert, showAlert, hideAlert } = useAlert();

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
      [e.target.email]: e.target.value,
      [e.target.message]: e.target.value,
    });
  };

  const handleFocus = () => setCurrentAnimation('Armature|Loop');

  const handleBlur = () => setCurrentAnimation('Armature|Loop');

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setCurrentAnimation('Armature|Pattern');

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
        showAlert({
          show: true,
          text: 'Message sent successfully!',
          type: 'success',
        });

        setTimeout(() => {
          // TODO: Hide the alert
          hideAlert();
          setCurrentAnimation('idle');
          setForm({ name: '', email: '', message: '' });
        }, [3000]);
      })
      .catch((error) => {
        setIsLoading(false);
        setCurrentAnimation('Static pose');
        console.log(error);
        // TODO: show error message
        showAlert({
          show: true,
          text: "I didn't receive your message",
          type: 'danger',
        });
      });
  };

  return (
    <section className='relative flex lg:flex-row flex-col max-container bg-[#202023] h-full lg:h-screen'>
      {alert.show && <Alert {...alert} />}
      <div className='min-w-[50%] flex flex-col'>
        <h1 className='head-text text-[#FFFFF5]'>與我聯絡</h1>

        <form
          onSubmit={handleSubmit}
          className='w-full flex flex-col gap-7 mt-14'
        >
          <label className='font-semibold text-xl text-[#FFFFF5] '>
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
          <label className='text-[#FFFFF5] text-xl font-semibold'>
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
          <label className='text-[#FFFFF5] text-xl font-semibold'>
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
      <div className='flex justify-center lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]'>
        <Canvas
          camera={{
            position: [0, 0, 5],
            fov: 75,
            near: 0.1,
            far: 1000,
          }}
        >
          <directionalLight intensity={2.5} position={[0, 0, 1]} />
          <ambientLight intensity={1} />
          <Suspense fallback={<Loader />}>
            {/* <Fox
              currentAnimation={currentAnimation}
              position={[0.5, 0.35, 0]}
              rotation={[12.6, -0.6, 0]}
              scale={[0.5, 0.5, 0.5]}
            /> */}
            <Rubik
              currentAnimation={currentAnimation}
              position={[-0.1, 0.1, 0]}
              rotation={[0.7, -0.88, 0.08]}
              scale={[1, 1, 1]}
            />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default Contact;
