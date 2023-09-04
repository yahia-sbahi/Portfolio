import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiDribbble} from 'react-icons/fi'
const Headersocials = () => {
  return (
    <div className='header_socials'>
        <a href="https://linkedin.com" rel='noreferrer' target="_blank"><BsLinkedin/></a>
        <a href="https://github.com" rel='noreferrer' target="_blank"><FaGithub/></a>
        <a href="https://dribbble.com" rel='noreferrer' target="_blank"><FiDribbble/></a>
    </div>
  )
}

export default Headersocials