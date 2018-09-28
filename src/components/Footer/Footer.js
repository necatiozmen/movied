import React from 'react';
import './Footer.css';
import Icon from '../Icons';

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-inner-container">
        <div className="footer-nav">
          <div className="footer-nav-list">
            <p>Home</p>
            <p>|</p>
            <p>Term and Conditions</p>
            <p>|</p>
            <p>Privacy Policy</p>
            <p>|</p>
            <p>Collection Statement</p>
            <p>|</p>
            <p>Help</p>
            <p>|</p>
            <p>Manage Account</p>
          </div>
          <div className="footer-copyright">
            <p>Copyright © 2018 DEMO Streaming. All Rights Reserved</p>
          </div>
        </div>
        <div className="footer-contact-container">
          <div className="footer-icons">
            <Icon name="facebook" width={50} height={25} />
            <Icon name="twitter" width={50} height={25} />
            <Icon name="instagram" width={50} height={25} />
          </div>
          <div className="footer-icons-app">
            <Icon name="appstore" width={140} height={35} />
            <Icon name="playstore" width={140} height={35} />
            <Icon name="windowstore" width={120} height={35} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
