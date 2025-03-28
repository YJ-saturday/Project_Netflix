import React from 'react';
import './Footer.style.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <p>Questions? Call 1-800-000-0000</p>
      </div>
      <div className="footer-links">
        <div className="footer-column">
          <a href="/faq">FAQ</a>
          <a href="/investor-relations">Investor Relations</a>
          <a href="/privacy">Privacy</a>
          <a href="/speed-test">Speed Test</a>
        </div>
        <div className="footer-column">
          <a href="/help-center">Help Center</a>
          <a href="/jobs">Jobs</a>
          <a href="/cookie-preferences">Cookie Preferences</a>
          <a href="/legal-notices">Legal Notices</a>
        </div>
        <div className="footer-column">
          <a href="/account">Account</a>
          <a href="/ways-to-watch">Ways to Watch</a>
          <a href="/corporate-information">Corporate Information</a>
          <a href="/only-on-netflix">Only on Netflix</a>
        </div>
        <div className="footer-column">
          <a href="/media-center">Media Center</a>
          <a href="/terms-of-use">Terms of Use</a>
          <a href="/contact-us">Contact Us</a>
        </div>
      </div>
      <div className="footer-bottom">
        <select className="language-selector">
          <option value="en">English</option>
        </select>
      </div>
    </footer>
  );
};

export default Footer;
