import React from 'react'
import { Link } from 'react-scroll'
import { FaArrowUp } from 'react-icons/fa'

const ScrollUp = () => {
  window.addEventListener('scroll', () => {
    let scrollUp = document.querySelector('#scrollUp')
    if (window.scrollY > 525) {
      scrollUp.classList.add('bottom-4')
      scrollUp.classList.remove('-border-1/4')
    } else {
      scrollUp.classList.add('-border-1/4')
      scrollUp.classList.remove('bottom-4')
    }
  })

  return (
    <div>
      <Link to='home' id='scrollUp' className='fixed right-4 bg-second py-3 px-3 rounded-lg z-50 duration-300 ease-in-out cursor-pointer hover:bg-sky-800' smooth={true} duration={500}><FaArrowUp className='text-md text-white' /></Link>
    </div>
  )
}

export default ScrollUp