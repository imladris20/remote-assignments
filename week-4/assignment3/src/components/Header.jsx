import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="top-header">
      <h1 className="main-title h-items"><a href="#">Caring Taiwan</a></h1>
      <nav className="main-nav h-items">
        <ul className="main-nav-ul h-items">
          <li><NavLink to="/">關於我們</NavLink></li>
          <li><NavLink to="/">議題列表</NavLink></li>
          <li><NavLink to="/">捐款支持</NavLink></li>
          <li><NavLink to="/">讀者投稿</NavLink></li>
        </ul>
      </nav>

      <ul className="main-nav-float-ul">
        <li><NavLink to="/">關於我們</NavLink></li>
        <li><NavLink to="/">議題列表</NavLink></li>
        <li><NavLink to="/">捐款支持</NavLink></li>
        <li><NavLink to="/">讀者投稿</NavLink></li>
      </ul>

      <Link className="close-logo" href="#"><img className="close" alt="close" src="/close.png" /></Link>

      <Link className="main-logo h-items" href="#"><img className="menu" alt="menu" src="/menu.png" /></Link>
    </header>
  );
}

export default Header;