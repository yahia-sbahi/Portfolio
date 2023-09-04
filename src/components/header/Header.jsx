import React from 'react'
import './Header.css'
import CTA  from './CTA'
import ME from '../../assets/me.png'
import Headersocials from './Headersocials'
const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Yahia Sbahi</h1>
        <h5 className="text-light">Front End Developer</h5>
         <CTA/>
        <Headersocials/>
         <div className="me">
          <img src={ME} alt="me" />
         </div>

         <a href="#contact" className='scroll_down'>scroll Down</a>
      </div>
    </header>
  )
}

export default Header