import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Learning Hub. All Rights Reserved.</p>
      <p>Made with ❤️ for Students</p>
    </footer>
  );
};

export default Footer;
