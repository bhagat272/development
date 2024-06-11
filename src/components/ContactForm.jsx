import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import Button from "@mui/material/Button";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [messageStatus, setMessageStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Accessing environment variables
    const userId = process.env.REACT_APP_EMAILJS_USER_ID;
    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;

    // Check if the environment variables are correctly loaded
    if (!userId || !serviceId || !templateId) {
      console.error('Environment variables are missing. Please check your .env file.');
      setMessageStatus('Error: Missing configuration. Please try again later.');
      return;
    }

    try {
      const response = await emailjs.sendForm(serviceId, templateId, e.target, userId);
      console.log('Message sent successfully!', response.status, response.text);
      setMessageStatus('Message sent successfully!');
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } catch (error) {
      console.error('Failed to send message. Error: ', error);
      setMessageStatus('Failed to send message. Please try again.');
    }
  };

  return (
    <div className="contact-form-container" style={{ textAlign: 'center', padding: '2rem' }} id='contact'>
      <h3 style={{ color: 'wheat', fontFamily: 'cursive' }}>Contact Me</h3>
      <form onSubmit={handleSubmit} style={{ maxWidth: '600px', margin: 'auto', display: 'flex', flexDirection: 'column' }}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
          style={{ margin: '10px 0', padding: '10px', borderRadius: '5px' }}
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          required
          style={{ margin: '10px 0', padding: '10px', borderRadius: '5px' }}
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          required
          style={{ margin: '10px 0', padding: '10px', borderRadius: '5px', minHeight: '150px' }}
        />
        <Button type="submit" variant="contained" color="primary">Send Message</Button>
      </form>
      {messageStatus && <p style={{ marginTop: '20px', color: 'wheat' }}>{messageStatus}</p>}
    </div>
  );
};

export default ContactForm;
