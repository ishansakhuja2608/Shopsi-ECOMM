import React from "react";
import "./NewsLetter.css";

const NewsLetter = () => {
  return (
    <div className="news-letter">
      <h1>Get Exclusive Offers On Your E-Mail</h1>
      <p>Just hit the Subscribe button and that's it.</p>
      <div>
        <input type="email" placeholder="Enter your E-Mail here." required />
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default NewsLetter;
