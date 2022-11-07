import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import { IonIcon } from '@ionic/react'
import { mail, logoLinkedin } from 'ionicons/icons'

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ogwt8gr', 'template_tray07h', form.current, 'gC33fX0PzgM4cPFmz')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <section id='contact' className='contact'>
      <h2>Contact Me</h2>
      <hr />
      <h4>Reach out using the form below or email me at ilsuryuzdev@gmail.com</h4>
      <div className='contact-content'>
        <div className='contact-options'>
          <div className='contactopt'>
            <IonIcon icon={mail} />
            <h3>Email</h3>
            <h4>ilsuryuzdev@gmail.com</h4>
            <a href="mailto:ilsuryuzdev@gmail.com" target="_blank" rel="noreferrer">Send me a message!</a>
          </div>
          <div className='contactopt'>
            <IonIcon icon={logoLinkedin} />
            <h3>LinkedIn</h3>
            <h4>Ilsur Yuzlikeyev</h4>
            <a className='' target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/ilsuryuz">
              Connect with me!
            </a>
          </div>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="from_name" placeholder='Your Name' />
          <input type="email" name="user_email" placeholder='Your Email' />
          <textarea name="message" placeholder='Type Your Message Here' />
          <input className='form-button' type="submit" value="Send" />
        </form>
      </div>
      <hr />
    </section>
  )
}

export default Contact