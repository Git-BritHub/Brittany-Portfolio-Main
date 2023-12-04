// import { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './style.css';

// Contact Form with fields for a name, an email address, and a message
function Contact() {
    // const [validationErrors, setValidationErrors] = useState({
    //     name: '',
    //     email: '',
    // });

    // const isValidEmail = (email) => {
    //     const emailRegex = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
    //     return emailRegex.test(email);
    // };

    // // Set up email validator and create notification when invalid email is entered
    // setValidationErrors({
    //     ...validationErrors,
    //     name: value.trim() === '' ? 'name is required' : '',
    //     email: name === 'email' && !isValidEmail(value) ? 'Valid email address required' : '',
    //  });

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        // const service = process.env.YOUR_SERVICE_ID;
        // const template = process.env.YOUR_TEMPLATE_ID;
        // const public = process.env.YOUR_PUBLIC_KEY;

        emailjs.sendForm(
            'service_1wxak7l',
            'template_i88rte7',
            form.current,
            // public key
            'EshwCiWQvuN8jArOY'
        )
            .then((result) => {
                console.log(form)
                console.log(form.current[0])
                form.current[0].value = '';
                form.current[1].value = '';
                form.current[2].value = 'Message Sent!';
                console.log(result.text);
                console.log('Message Sent')
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className='contactHeader mt-5 pt-3'><h1>CONTACT ME</h1>
        <Form ref={form} onSubmit={sendEmail} className='container border rounded-2 my-4'>
            <Form.Group controlId='formName'>
                <Form.Label className='d-flex my-2'>NAME</Form.Label>
                <Form.Control type='text' name='user_name' placeholder='Enter your name' />
            </Form.Group>

            <Form.Group controlId='formEmail'>
                <Form.Label className='d-flex my-2'>EMAIL</Form.Label>
                <Form.Control type='email' name='user_email' placeholder='Enter your email' />
            </Form.Group>

            <Form.Group controlId='formMessage'>
                <Form.Label className='d-flex my-2'>MESSAGE</Form.Label>
                <Form.Control as='textarea' rows={3} name='message' placeholder='Enter your message' />
            </Form.Group>

            <Button variant='primary' type='submit' className='submitBtn my-3'>
                Submit
            </Button>
        </Form>
        </div>
    );
};

export default Contact;