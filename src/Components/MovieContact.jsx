import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaPaperPlane } from 'react-icons/fa';
import Swal from 'sweetalert2';
import '../Styles/MovieContact.css';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const Navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const serviceID = 'service_9pi48yk'; 
    const templateID = 'template_k9p14b5'; 
    const publicKey = 'tZDJbKteRVRRJ9d2b'; 

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };

    emailjs
      .send(serviceID, templateID, templateParams, publicKey)
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          Swal.fire({
            icon: 'success',
            title: 'Message Sent!',
            text: 'Your message has been sent successfully.',
            confirmButtonColor: '#ffc107',
            confirmButtonText: 'OK',
          });
          setFormData({ name: '', email: '', message: '' }); 
          Navigate('/');
        },
        (error) => {
          console.log('FAILED...', error);
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Failed to send message. Please try again later.',
            confirmButtonColor: '#ffc107',
            confirmButtonText: 'OK',
          });
          setFormData({ name: '', email: '', message: '' }); 
          Navigate('/');
        }
      )
      .finally(() => {
        setIsLoading(false); 
      });
  };

  return (
    <div className="contact-container bg-dark text-white py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <h1 className="text-center mb-4">Contact Us</h1>
            <h3 className="text-center mb-5">
              Have a question or want to get in touch? Send us a message!
            </h3>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="mb-4">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-control bg-dark text-white border-secondary"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-control bg-dark text-white border-secondary"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="form-control bg-dark text-white border-secondary"
                  placeholder="Enter your message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn btn-primary w-100 d-flex align-items-center justify-content-center"
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="spinner-border spinner-border-sm" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                ) : (
                  <>
                    <FaPaperPlane className="me-2" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;