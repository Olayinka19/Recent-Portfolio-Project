import React from 'react';
import './Footer.css'; // Import your CSS file for styling

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* <div className="footer-logo">
          <a href="/">Your Logo</a>
        </div>
        <div className="footer-links">
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Services</a>
          <a href="/">Contact</a>
        </div>
        <div className="footer-social-icons">
          <a href="/"><i className="fab fa-facebook"></i></a>
          <a href="/"><i className="fab fa-twitter"></i></a>
          <a href="/"><i className="fab fa-instagram"></i></a>
        </div> */}
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Olayinka_Porfolio. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
