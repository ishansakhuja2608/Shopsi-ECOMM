import React from "react";
import "./Footer.css";
import footer_logo from "../Assets/logo_big.png";
import instagramImg from "../Assets/instagram_icon.png";
import pinterestImg from "../Assets/pintester_icon.png";
import whatsappImg from "../Assets/whatsapp_icon.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={footer_logo} alt="" />
        <p>SHPOSI</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icon-container">
          <img src={instagramImg} alt="" />
        </div>
        <div className="footer-icon-container">
          <img src={pinterestImg} alt="" />
        </div>
        <div className="footer-icon-container">
          <img src={whatsappImg} alt="" />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2023 - All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
