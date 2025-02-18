import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'; 
import { useNavigate } from 'react-router-dom'; 
import '../Styles/MovieFooter.css'; 
import Swal from 'sweetalert2'; 

const Footer = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/signup'); 
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
     Swal.fire({
            title: 'Success!',
            text: 'Successfully Subscribed To MovieApp',
            icon: 'success',
            confirmButtonText: 'OK'
          }).then(() => {
            Navigate("/");
          });
  };

  return (
    <footer className="footer bg-gradient py-5">
      <div className="container">
        <div className="row g-4">
          <div className="col-md-4 mb-4">
            <h5 className="footer-heading mb-3">About Movie App</h5>
            <p className="footer-text">
              Discover the world of cinema with Movie App. We bring you the latest movies, exclusive content, and personalized recommendations.
            </p>
            <button className="btn btn-primary" onClick={handleGetStarted}>
              Get Started
            </button>
          </div>
          <div className="col-md-2 mb-4">
            <h5 className="footer-heading mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/movies" className="footer-link">Movies</a></li>
              <li><a href="/products" className="footer-link">Products</a></li>
              <li><a href="/support" className="footer-link">Support</a></li>
              <li><a href="/offers" className="footer-link">Offers</a></li>
              <li><a href="/about" className="footer-link">About Us</a></li>
            </ul>
          </div>

          <div className="col-md-2 mb-4">
            <h5 className="footer-heading mb-3">Legal</h5>
            <ul className="list-unstyled">
              <li><a href="/terms" className="footer-link">Terms of Service</a></li>
              <li><a href="/privacy" className="footer-link">Privacy Policy</a></li>
              <li><a href="/faq" className="footer-link">FAQ</a></li>
              <li><a href="/contact" className="footer-link">Contact Us</a></li>
            </ul>
          </div>

          <div className="col-md-4 mb-4">
            <h5 className="footer-heading mb-3">Subscribe to Our Newsletter</h5>
            <form onSubmit={handleSubscribe} className="d-flex gap-2">
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email"
                required
              />
              <br />
              <button type="submit" className="btn btn-primary">
                Subscribe
              </button>
            </form>
            <p className="footer-text mt-2">
              Stay updated with the latest movies and exclusive offers.
            </p>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-md-6 mb-4">
            <h5 className="footer-heading mb-3">Contact Us</h5>
            <ul className="list-unstyled">
              <li className="footer-text">
                <FaEnvelope className="me-2" />
                <a href="mailto:support@movieapp.com" className="footer-link">support@movieapp.com</a>
              </li>
              <li className="footer-text">
                <FaPhone className="me-2" />
                <a href="tel:+1234567890" className="footer-link">+1 (234) 567-890</a>
              </li>
              <li className="footer-text">
                <FaMapMarkerAlt className="me-2" />
                123 Movie Street, Hollywood, USA
              </li>
            </ul>
          </div>

          <div className="col-md-6 mb-4">
            <h5 className="footer-heading mb-3">Follow Us</h5>
            <div className="d-flex gap-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="footer-social-link">
                <FaFacebook size={25} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="footer-social-link">
                <FaTwitter size={25} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footer-social-link">
                <FaInstagram size={25} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="footer-social-link">
                <FaLinkedin size={25} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="footer-social-link">
                <FaYoutube size={25} />
              </a>
            </div>
          </div>
        </div>

        <div className="text-center mt-4 pt-3 border-top border-secondary">
          <p className="footer-text mb-0">
            &copy; {new Date().getFullYear()} Movie App. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;