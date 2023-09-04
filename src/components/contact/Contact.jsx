import React from 'react'
import './Contact.css'
import {MdOutlineEmail}from 'react-icons/md'
import {RiMessengerLine}from 'react-icons/ri'
import {BsWhatsapp}from 'react-icons/bs'
import  { useRef } from 'react';
import emailjs from 'emailjs-com';
const Contact = () => {
  const form= useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_uslpkoj', 'template_2jr8ezm', form.current, 'sjkKgFPEsNWXI9l7v')

    e.target.reset()
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div   className="contact_options">
            <article className="contact_option">
                <MdOutlineEmail className='contact_option-icon'/>
                <h4>Email</h4>
                <h5>laizmain@gmail.com</h5>
                <a href="mailto:laizmain@gmail.com">Send a message</a>

            </article>
            <article className="contact_option">
                <RiMessengerLine className='contact_option-icon'/>
                <h4>Messenger</h4>
                <h5>tutorials</h5>
                <a href="https://m.me/laizmain">Send a message</a>

            </article>
            <article className="contact_option">
                <BsWhatsapp className='contact_option-icon'/>
                <h4>WhatsApp</h4>
                <a href="https://api.whatsapp.com/send?phone=+9630937702555">Send a message</a>

            </article>
        </ div>
        {/* END OF CONTACT OPITONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message"  rows="10" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact