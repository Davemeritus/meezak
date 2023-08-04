import React from 'react';
import logo from '../../assets/logo.svg';
import './footer.css';

const Footer = () => (
  <div className="mzk__footer section__padding">
    <div className="mzk__footer-heading">
      <h1 className="gradient__text">Contact us today to get the best value for your money</h1>
    </div>

    <div className="mzk__footer-btn">
      <p>Book us now</p>
    </div>

    <div className="mzk__footer-links">
      <div className="mzk__footer-links_logo">
        <img src={logo} alt="gpt3_logo" />
        <p>If it's not excellent, <br /> we didn't build it</p>
      </div>
      <div className="mzk__footer-links_div">
        <h4>Links</h4>
        <p>Projects</p>
        <p>Social Media</p>
        <p>Counters</p>
        <p>Contact</p>
      </div>
      <div className="mzk__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="mzk__footer-links_div">
        <h4>Get in touch</h4>
        <p>Crechterwoord K12 182 DK Alknjkcb</p>
        <p>0810-0444-400</p>
        <p>contact@meezak.io</p>
      </div>
    </div>

    <div className="mzk__footer-copyright">
      <p>@2023 Meezak. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;