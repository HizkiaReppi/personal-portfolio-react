import React from 'react'
import { FaHtml5, FaCss3, FaJs, FaReact, FaBootstrap, FaNodeJs, FaFigma } from 'react-icons/fa'
import { SiTailwindcss, SiCodeigniter, SiMicrosoftword, SiMicrosoftexcel, SiMicrosoftpowerpoint } from 'react-icons/si'


const Skills = () => {
  return (
    <div name='skills' className='w-full mt-10 text-gray-300'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
          <p className='text-4xl font-semibold inline border-b-4 border-second'>Skills</p>
        </div>
        <p className='text-lg font-normal mt-8'>Tech Stack</p>
        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-8 text-center py-8'>
          <div className='shadow-md shadow-[#040C16] flex flex-col items-center hover:scale-110 duration-500'>
            <FaHtml5 className='text-5xl text-amber-700' />
            <p className='my-4'>HTML5</p>
          </div>
          <div className='shadow-md shadow-[#040C16] flex flex-col items-center hover:scale-110 duration-500'>
            <FaCss3 className='text-5xl text-sky-500' />
            <p className='my-4'>CSS3</p>
          </div>
          <div className='shadow-md shadow-[#040C16] flex flex-col items-center hover:scale-110 duration-500'>
            <FaJs className='text-5xl text-yellow-500' />
            <p className='my-4'>JavaScript</p>
          </div>
          <div className='shadow-md shadow-[#040C16] flex flex-col items-center hover:scale-110 duration-500'>
            <FaReact className='text-5xl text-sky-600' />
            <p className='my-4'>ReactJS</p>
          </div>
          <div className='shadow-md shadow-[#040C16] flex flex-col items-center hover:scale-110 duration-500'>
            <SiTailwindcss className='text-5xl text-sky-500' />
            <p className='my-4'>TailwindCSS</p>
          </div>
          <div className='shadow-md shadow-[#040C16] flex flex-col items-center hover:scale-110 duration-500'>
            <FaBootstrap className='text-5xl text-violet-700' />
            <p className='my-4'>Bootstrap</p>
          </div>
          <div className='shadow-md shadow-[#040C16] flex flex-col items-center hover:scale-110 duration-500'>
            <FaNodeJs className='text-5xl text-lime-600' />
            <p className='my-4'>Node JS</p>
          </div>
          <div className='shadow-md shadow-[#040C16] flex flex-col items-center hover:scale-110 duration-500'>
            <SiCodeigniter className='text-5xl text-red-800' />
            <p className='my-4'>Codeigniter</p>
          </div>
        </div>
        <p className='text-lg font-normal -mt-2'>More Skiils</p>
        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-8 text-center py-8'>
          <div className='shadow-md shadow-[#040C16] flex flex-col items-center hover:scale-110 duration-500'>
            <FaFigma className='text-5xl text-amber-700' />
            <p className='my-4'>Figma</p>
          </div>
          <div className='shadow-md shadow-[#040C16] flex flex-col items-center hover:scale-110 duration-500'>
            <SiMicrosoftword className='text-5xl text-sky-500' />
            <p className='my-4'>Microsoft Word</p>
          </div>
          <div className='shadow-md shadow-[#040C16] flex flex-col items-center hover:scale-110 duration-500'>
            <SiMicrosoftexcel className='text-5xl text-green-500' />
            <p className='my-4'>Microsoft Excel</p>
          </div>
          <div className='shadow-md shadow-[#040C16] flex flex-col items-center hover:scale-110 duration-500'>
            <SiMicrosoftpowerpoint className='text-5xl text-red-600' />
            <p className='my-4'>Microsoft PowerPoint</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills