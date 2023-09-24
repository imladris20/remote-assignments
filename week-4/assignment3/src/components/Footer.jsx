import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <nav>
        <ul>
          <Link className="button" to="/" style={{marginRight: "8px"}}>捐款支持</Link>
          <Link className="button" to="/">聯絡我們</Link>
        </ul>
      </nav>
      <span>&copy;2023 Caring Taiwan credited to Po-Lien Lin</span>
    </footer>
  );
}

export default Footer;