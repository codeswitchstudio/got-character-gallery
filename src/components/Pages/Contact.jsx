import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../../App.css';
import Button from 'react-bootstrap/Button';
import '../Hero/index.css';
// import { Form, Input, TextArea, Button } from 'semantic-ui-react';

// const Contact = () => {

//   {/* --- handleOnSubmit method --- */}

//   return (
//     <div className='App'>
//       <Form onSubmit={handleOnSubmit}>
//         <Form.Field
//           id='form-input-control-email'
//           control={Input}
//           label='Email'
//           name='user_email'
//           placeholder='Email…'
//           required
//           icon='mail'
//           iconPosition='left'
//         />
//         <Form.Field
//           id='form-input-control-last-name'
//           control={Input}
//           label='Name'
//           name='user_name'
//           placeholder='Name…'
//           required
//           icon='user circle'
//           iconPosition='left'
//         />
//         <Form.Field
//           id='form-textarea-control-opinion'
//           control={TextArea}
//           label='Message'
//           name='user_message'
//           placeholder='Message…'
//           required
//         />
//         <Button type='submit' color='green'>Submit</Button>
//       </Form>
//     </div>
//   );
// }

// export default Contact;




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
      <row>
        <h2 id='contact-h2'>Get in touch</h2>
      </row>
    
      <div> 
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

