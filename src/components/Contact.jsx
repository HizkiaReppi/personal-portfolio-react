import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_afbyqma', 'template_swekzty', form.current, 'ORnGq3Z75sShz3R4P')
      .then((result) => {
        document.querySelector('form').reset()
        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'Your message has been sent',
        })
      }, (error) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
        })
      });
  };

  return (
    <div name='contact' className='w-full flex justify-center items-center text-gray-300 p-4'>
      <form ref={form} onSubmit={sendEmail} className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8'>
          <p className='text-4xl font-semibold inline border-b-4 border-second '>Contact</p>
        </div>
        <input className='p-4 bg-[#0b0b13] mb-3 outline-none border-none rounded-lg' type="text" placeholder='Your Name' name='name' required />
        <input className='p-4 bg-[#0b0b13] mb-3 outline-none border-none rounded-lg' type="email" placeholder='Your Email' name='email' required />
        <textarea className='p-4 bg-[#0b0b13] mb-2 outline-none border-none rounded-lg' name="message" id="message" placeholder='Project Description' cols="20" rows="10" required></textarea>
        <button type='submit' className='bg-second text-white shadow-btn shadow-white py-[10px] px-7 inline-block border border-solid border-transparent text-base font-normal ease transition-all duration-300 cursor-pointer hover:bg-white hover:text-second hover:shadow-second'>Let's Collaborate</button>
      </form>
    </div>
  )
}

export default Contact