import React from "react";
import "./Footer.css";
import logo from "../img/apple-touch-icon.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Brand Section */}
        <div className="footer-brand">
          <img src={logo} alt="SyncUp Logo" className="footer-logo" />
          <h1 className="footer-brand-name">SyncUp</h1>
          <p className="footer-description">
            SyncUp is your platform to connect, collaborate, and grow. 
            Bringing students and innovators together to build the future. 🚀
          </p>
        </div>

        {/* Product Links */}
        <div className="footer-column">
          <h3>Product</h3>
          <ul>
            <li><a href="#">Features</a></li>
            <li><a href="#">Integrations</a></li>
            <li><a href="/pricing">Pricing</a></li>
            <li><a href="/faq">FAQs</a></li>
          </ul>
        </div>

        {/* Company Links */}
        <div className="footer-column">
          <h3>Company</h3>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="/blogs">Blog</a></li>
            <li><a href="/contacts">Contact</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div className="footer-column">
          <h3>Resources</h3>
          <ul>
            <li><a href="#">Help Center</a></li>
            <li><a href="#">Community</a></li>
            <li><a href="#">Guides</a></li>
            <li><a href="#">Documentation</a></li>
          </ul>
        </div>

        {/* Social Links */}
        <div className="footer-column">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#"><i className="devicon-linkedin-plain"></i></a>
            <a href="https://github.com/SUGAM-ARORA/UniCollab" target="_blank" rel="noreferrer">
              <i className="devicon-github-original"></i>
            </a>
            <a href="#"><i className="devicon-facebook-plain"></i></a>
            <a href="#"><i className="devicon-twitter-original"></i></a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <p>© 2025 SyncUp. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
