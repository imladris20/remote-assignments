import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <nav>
        <ul>
          <NavLink className="button" to="/">捐款支持</NavLink>
          <NavLink className="button" to="/">聯絡我們</NavLink>
        </ul>
      </nav>
      <span>&copy;2023 Caring Taiwan credited to Po-Lien Lin</span>
    </footer>
  );
}

export default Footer;