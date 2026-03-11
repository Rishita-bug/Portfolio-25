import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './ContactModal.css';

function ContactModal({ isOpen, onClose, onSubmit }) {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' or 'error'

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);
      setSubmitStatus(null);

      try {
        // Send to Google Sheets (for your records)
        const scriptURL = import.meta.env.VITE_GOOGLE_SCRIPT_URL;

        if (scriptURL) {
          await fetch(scriptURL, {
            method: 'POST',
            mode: 'no-cors',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
          });
        }

        // Send resume via email using EmailJS
        const emailjsServiceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const emailjsTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const emailjsPublicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        if (emailjsServiceId && emailjsTemplateId && emailjsPublicKey) {
          await emailjs.send(
            emailjsServiceId,
            emailjsTemplateId,
            {
              to_name: formData.name,
              to_email: formData.email,
              reply_to: formData.email
            },
            emailjsPublicKey
          );

          setSubmitStatus('success');

          // Reset form after brief delay
          setTimeout(() => {
            setFormData({ name: '', email: '' });
            setErrors({});
            setSubmitStatus(null);
            onClose();
          }, 3000);
        } else {
          throw new Error('EmailJS not configured');
        }

      } catch (error) {
        console.error('Error submitting form:', error);
        setSubmitStatus('error');
      } finally {
        setIsSubmitting(false);
      }
    } else {
      setErrors(newErrors);
    }
  };

  const handleClose = () => {
    setFormData({ name: '', email: '' });
    setErrors({});
    setSubmitStatus(null);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={handleClose}>×</button>
        <h2 className="modal-title">Get my resume</h2>
        <p className="modal-description">Enter your details and I'll email you my resume</p>

        {submitStatus === 'success' && (
          <div className="status-message success-message">
            Resume sent! Check your inbox.
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="status-message error-message">
            Something went wrong. Please try again.
          </div>
        )}

        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={errors.name ? 'error' : ''}
              placeholder="Your name"
            />
            {errors.name && <span className="error-message">{errors.name}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? 'error' : ''}
              placeholder="your@email.com"
            />
            {errors.email && <span className="error-message">{errors.email}</span>}
          </div>

          <button type="submit" className="submit-button" disabled={isSubmitting || submitStatus === 'success'}>
            {isSubmitting ? 'Sending...' : submitStatus === 'success' ? 'Sent!' : 'Send Resume'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactModal;
