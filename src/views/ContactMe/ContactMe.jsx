import { Form, Button, Alert } from 'react-bootstrap';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './style.css';

function Contact() {
    const [errors, setErrors] = useState({});
    const [blurredFields, setBlurredFields] = useState([]);
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const [generalError, setGeneralError] = useState('');
    const form = useRef();
    const [touched, setTouched] = useState({
        user_name: false,
        user_email: false,
        message: false,
    });

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validateName = (name) => {
        return name.trim() !== '';
    };

    const validateMessage = (message) => {
        return message.trim() !== '';
    };

    const handleChange = (fieldName, value) => {
        if (blurredFields.includes(fieldName)) {
            handleBlur(fieldName, value);
        }
        // Clear the general error message when the user starts typing
        setGeneralError('');
    };

    const handleBlur = (fieldName, value) => {
        setBlurredFields([...blurredFields, fieldName]);
        setTouched((prevTouched) => ({ ...prevTouched, [fieldName]: true }));

        if (fieldName === 'user_email' && !validateEmail(value)) {
            setErrors((prevErrors) => ({ ...prevErrors, [fieldName]: 'Invalid email address' }));
        } else if (fieldName === 'user_name' && !validateName(value)) {
            setErrors((prevErrors) => ({ ...prevErrors, [fieldName]: 'Name is required' }));
        } else if (fieldName === 'message' && !validateMessage(value)) {
            setErrors((prevErrors) => ({ ...prevErrors, [fieldName]: 'Message is required' }));
        } else {
            setErrors((prevErrors) => ({ ...prevErrors, [fieldName]: undefined }));
        }
    };

    const sendEmail = (e) => {
        e.preventDefault();

        // Check if all fields are touched
        const allFieldsTouched = Object.values(touched).every(Boolean);

        // Check for validation errors before sending the email
        if (!allFieldsTouched || Object.values(errors).filter(Boolean).length > 0) {
            // Update error messages for required fields
            setErrors((prevErrors) => ({
                ...prevErrors,
                user_name: touched.user_name && !validateName(form.current.user_name.value) ? 'Name is required' : undefined,
                user_email: touched.user_email && !validateEmail(form.current.user_email.value) ? 'Invalid email address' : undefined,
                message: touched.message && !validateMessage(form.current.message.value) ? 'Message is required' : undefined,
            }));

            // Set the general error message
            setGeneralError('Fields cannot be blank');
            return;
        }

        // If all conditions are met, proceed with sending the email
        emailjs
            .sendForm(
                'service_1wxak7l',
                'template_i88rte7',
                form.current,
                'EshwCiWQvuN8jArOY'
            )
            .then((result) => {
                // Handle success
                console.log(result.text);
                console.log('Message Sent');

                // Reset the form and show success message
                setIsFormSubmitted(true);
                setTimeout(() => {
                    setIsFormSubmitted(false);
                    form.current.reset();
                    setBlurredFields([]);
                    setTouched({
                        user_name: false,
                        user_email: false,
                        message: false,
                    });
                    setErrors({});
                    setGeneralError('');
                }, 3000);
            })
            .catch((error) => {
                // Handle error
                console.error('Error sending email:', error);
            });
    };

    return (
        <div className='contactHeader mt-5 pt-3'>
            <h1>CONTACT ME</h1>
            <Form ref={form} onSubmit={sendEmail} className='container border rounded-2 my-4'>

                <Form.Group controlId='formName'>
                    <Form.Label className='d-flex my-2'>NAME</Form.Label>
                    <Form.Control type='text' name='user_name' placeholder='Enter your name' onBlur={(e) => handleBlur('user_name', e.target.value)} onChange={(e) => handleChange('user_name', e.target.value)} />
                    {touched.user_name && errors.user_name && (
                        <Alert variant='danger' className='py-2 my-2'>{errors.user_name}</Alert>
                    )}
                </Form.Group>

                <Form.Group controlId='formEmail'>
                    <Form.Label className='d-flex my-2'>EMAIL</Form.Label>
                    <Form.Control
                        type='email'
                        name='user_email'
                        placeholder='Enter your email'
                        onBlur={(e) => handleBlur('user_email', e.target.value)}
                        onChange={(e) => handleChange('user_email', e.target.value)}
                    />
                    {touched.user_email && errors.user_email && (
                        <Alert variant='danger' className='py-2 my-2'>{errors.user_email}</Alert>
                    )}
                </Form.Group>

                <Form.Group controlId='formMessage'>
                    <Form.Label className='d-flex my-2'>MESSAGE</Form.Label>
                    <Form.Control as='textarea' rows={3} name='message' placeholder='Enter your message' onBlur={(e) => handleBlur('message', e.target.value)} onChange={(e) => handleChange('message', e.target.value)} />
                    {touched.message && errors.message && (
                        <Alert variant='danger' className='py-2 mt-2 mb-0'>{errors.message}</Alert>
                    )}
                </Form.Group>

                <Button variant='custom' type='submit' className={`submitBtn my-3 ${isFormSubmitted ? 'alert-success' : ''}`}>
                    {isFormSubmitted ? 'FORM SUCCESSFULLY SUBMITTED' : 'SUBMIT'}
                </Button>
                {generalError && <Alert variant='danger' className='submitDanger py-3 mb-3'>{generalError}</Alert>}
            </Form>
        </div>
    );
}

export default Contact;
