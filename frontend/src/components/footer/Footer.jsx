import React from 'react'
import "./Footer.css";
import { assets } from '../../assets/assets';
export const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>
          Welcome to GreenGrocer, your premier destination for fresh,organic and high-quality vegetables delivered directly to your doorstep. Founded with a passion for promoting healthy eating and sustainable living, GreenGrocer is dedicated to providing you with the freshest produce sourced from local farmers and trusted suppliers.
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>Company</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+91 9182731495</li>
                <li>contact@greengrocer.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className='footer-copyrights'>copyrights 2024 c tomato.com - All Rights Reserved.</p>
    </div>
  );
}
