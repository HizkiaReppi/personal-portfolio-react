import React from 'react'
import singlePhoto from '../assets/single-photo.jpg'
import { FaAward, FaUsers, FaFolder } from 'react-icons/fa'
import { Link } from 'react-scroll'

const About = () => {
  return (
    <div name='about' className='py-3 px-[6%] md:py-4 md:px-[11%] md:mt-5'>
      <h5 className='text-center text-sm text-gray-300'>Get To Know</h5>
      <h2 className='text-center text-4xl text-second font-semibold mb-4 md:mb-14'>About Me</h2>

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-0 md:gap-2'>
        <div className='w-1/2 mt-4 mx-auto mb-8 md:w-96 aspect-square rounded-lg bg-second grid place-items-center'>
          <div className='rounder-xl overflow-hidden -rotate-6 duration-500 hover:rotate-0'>
            <img src={singlePhoto} alt="Hizkia Reppi" />
          </div>
        </div>
        <div className='text-center md:text-left mt-4'>
          <div className='grid grid-cols-2 md:grid-cols-3 gap-7'>
            <div className='bg-second border border-solid border-transparent rounded-xl px-0 py-4 md:py-7 text-center flex flex-col items-center hover:bg-transparent hover:border-white text-gray-300 hover:text-second duration-300 ease'>
              <FaAward className='text-lg mb-3' />
              <h5 className='text-sm md:text-lg'>Experience</h5>
              <small className='text-[8.5px] md:text-[10px]'>1+ Years Working</small>
            </div>
            <div className='bg-second border border-solid border-transparent rounded-xl px-0 py-4 md:py-7 text-center flex flex-col items-center hover:bg-transparent hover:border-white text-gray-300 hover:text-second duration-300 ease'>
              <FaUsers className='text-lg mb-3' />
              <h5 className='text-sm md:text-lg'>Clients</h5>
              <small className='text-[8.5px] md:text-[10px]'>2+ Worldwide</small>
            </div>
            <div className='bg-second border border-solid border-transparent rounded-xl px-0 py-4 md:py-7 text-center flex flex-col items-center hover:bg-transparent hover:border-white text-gray-300 hover:text-second duration-300 ease self-center'>
              <FaFolder className='text-lg mb-3' />
              <h5 className='text-sm md:text-lg'>Projects</h5>
              <small className='text-[8.5px] md:text-[10px]'>3+ Completed</small>
            </div>
          </div>
          <p className='mt-8 mx-0 mb-9'>
            I'm Hizkia Reppi, I come from Indonesia. I am a student at Manado State University. I focus on the field of Web Development, especially in the field of Front-End Web Development. I have attended and am competent in the LSP Informatics Junior Web Developer certification. I love working with other developers and I enjoy writing useful code and web elements for users all over the world.
          </p>
          <Link to='contact' className='bg-second text-white shadow-btn shadow-white py-[10px] px-7 inline-block border border-solid border-transparent text-base font-normal ease transition-all duration-300 cursor-pointer hover:bg-white hover:text-second hover:shadow-second' smooth={true} duration={500}>Contact Me</Link>
        </div>
      </div>
    </div>
  )
}

export default About