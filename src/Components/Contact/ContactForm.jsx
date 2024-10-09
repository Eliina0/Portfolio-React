import React, { useState } from 'react';
import './Contact.css'; 

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        const newErrors = {};
        if (!name.trim()) {
            newErrors.name = 'Name is required!';
        }
        if (!email.trim()) {
            newErrors.email = 'Email is required!';
        } else if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email.trim())) {
            newErrors.email = 'Please enter a valid email!';
        }
        if (!message.trim()) {
            newErrors.message = 'Message is required!';
        }
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(validateForm());

        if (Object.keys(errors).length === 0) {
            console.log(name, email, subject, message);
            setName('');
            setEmail('');
            setSubject('');
            setMessage('');
        }
    };

    return (
        <section className="contact" id="contact">
            <h2>Contact Me</h2>
            <form id="contactForm">
                <div className="input-group">
                    <label htmlFor="name">Name: <span>*</span></label>
                    <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        required 
                        value={name}
                        onChange={(e) => setName(e.target.value)} 
                    />
                </div>
                {errors.name && <div className="error-message">{errors.name}</div>}
                <div className="input-group">
                    <label htmlFor="email">Email: <span>*</span></label>
                    <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        required 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} 
                    />
                </div>
                {errors.email && <div className="error-message">{errors.email}</div>}
                <div className="input-group">
                    <label htmlFor="subject">Subject: </label>
                    <input 
                        type="text" 
                        id="subject" 
                        name="subject" 
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)} 
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="message">Message: <span>*</span></label>
                    <input 
                        type="text" 
                        id="message" 
                        name="message" 
                        required 
                        value={message}
                        onChange={(e) => setMessage(e.target.value)} 
                    />
                </div>
                {errors.message && <div className="error-message">{errors.message}</div>}
                <button type="submit" className="btn" id="contact-btn" onClick={handleSubmit}>Send Message</button>
            </form>
        </section>
    );
};

export default ContactForm;
