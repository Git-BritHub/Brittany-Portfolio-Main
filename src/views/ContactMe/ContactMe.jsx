import { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import './style.css';

// Contact Form with fields for a name, an email address, and a message
function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [validationErrors, setValidationErrors] = useState({
        name: '',
        email: '',
    });
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
        // Set up email validator and create notification when invalid email is entered
        setValidationErrors({
            ...validationErrors,
            [name]: value.trim() === '' ? `${name} is required` : '',
            email: name === 'email' && !isValidEmail(value) ? 'Valid email address required' : '',
        });
    };

    const isValidEmail = (email) => {
        // Email Regex
        const emailRegex = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
        return emailRegex.test(email);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

    // Check for errors before submitting form
    const hasErrors = Object.values(validationErrors).some((error) => error !== '');
    if (hasErrors) {
    console.log('Form has validation errors. Please corrrect them, thanks!');
    } else {
        console.log('Form Submitted:', formData);
    }
};

    return (
        <div className='contactHeader mt-5 pt-3'><h1>CONTACT ME</h1>
        <Form onSubmit={handleSubmit} className='container border rounded-2 my-4'>
            <Form.Group controlId='formName'>
                <Form.Label className='d-flex mt-2'>NAME</Form.Label> 
                <Form.Control
                    type='text' 
                    placeholder='Enter name here' 
                    name='name'
                    value={formData.name}
                    onChange={handleInputChange}
                    onBlur={handleInputChange}
                />
                {validationErrors.name}
            </Form.Group>

            <Form.Group controlId='formEmail'>
                <Form.Label className='d-flex mt-2'>EMAIL</Form.Label>
                <Form.Control
                    type='email'
                    placeholder='Enter email here'
                    name='email'
                    valude={formData.email}
                    onChange={handleInputChange}
                    onBlur={handleInputChange}
                />
                {validationErrors.email}
            </Form.Group>

            <Form.Group controlId='formMessage'>
            <Form.Label className='d-flex mt-2'>MESSAGE</Form.Label>
                <Form.Control
                    as='textarea'
                    rows={3}
                    placeholder='Enter your message here'
                    name='message'
                    value={formData.message}
                    onChange={handleInputChange}
                />
            </Form.Group>

            <Button variant='primary' type='submit' className='submitBtn my-3'>Submit</Button>
        </Form>
        </div>
    );
};

export default Contact;