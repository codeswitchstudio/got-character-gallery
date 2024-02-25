import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
// import Button from 'react-bootstrap/Button';
import '../Hero/index.css';


export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('react_contact_detail', 'react_contact_form', form.current, {
        publicKey: '8KqETrjVPmCQkm-An',
      })
      .then(
        () => {
          alert('Email sent! Thank you!');
        },
        (error) => {
          alert('Whoops! Failed to send. Could you try again, please?', error.text);
        },
      );
  };

  return (

    <container id='form'>
   
   
        <h2 id='contact-h2'>Get in touch</h2>
     

      <div id='form'> 
        <form ref={form} onSubmit={sendEmail}>
          <row><label id='name'>Name</label><br />
          <input type='text' name='user_name' /><br />
          </row>
          <row>
          <label id='email'>Email</label><br />
          <input type='email' name='user_email' /><br />
          </row>
          <row>
          <br />
          <label id='message'>Message</label><br />
          <textarea id='text' name='message' /><br />
          </row>
          <input type='submit' id='btn' value='Send' /><br />
          {/* <Button id="button">Send</Button> */}
        </form>
      </div>
    </container>
  );
  
};

export default Contact;

