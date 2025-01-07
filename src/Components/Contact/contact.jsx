import React, { useRef, useState } from 'react'
import './contact.css'

import emailjs from '@emailjs/browser';

import { themeContext } from '../../context';
import { useContext } from 'react';


const Contact = () => {

  const theme = useContext(themeContext);
      const darkMode = theme.state.darkMode;

    const form = useRef();

    const [done, setDone] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_yafpp8l', 'template_8qla7uh', form.current, {
        publicKey: 'q3YWmEqN413D4INnz',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setDone(true)
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <div className="contact-form">
        <div className="w-left">
            <div className="about">
                <span style={{color: darkMode? 'white': ''}}>Get in Touch</span>
                <span>Contact me</span>

                <div className="blur e-blur1" style={{ background: "var(--purple)", left: "-14rem", top:"15rem"}}> </div>


            </div>
        </div>

        <div className="c-right">
        <div className="blur e-blur2" style={{background:"#C1F5FF", top: '0rem', width:'21rem',height:'15rem', left:'15rem', }}></div>

            <form ref={form} onSubmit={sendEmail}>

                <input type="text" name='user_name' className='user' placeholder='Name' />
                <input type="email" name='user_email' className='user' placeholder='Email'  />

                <textarea name="message" className='user' placeholder='Message'></textarea>
                <input type="Submit" value="Send" className='button' />
                <span >{done && "Thanks for contacting"}</span>

            </form>
        </div>
    </div>
  )
}

export default Contact
