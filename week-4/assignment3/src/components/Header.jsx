import React, { useContext } from 'react';
import { NavLink, Link } from 'react-router-dom';
import DataContext from '../context/DataContext';

const Header = () => {

  const { isOriginNavShowed, isFloatNavShowed, actions } = useContext(DataContext);


  return (
    <header className="top-header">
      <h1 className="main-title h-items"><Link to="/">Caring Taiwan</Link></h1>
      <nav className="main-nav h-items">
        <ul className="main-nav-ul h-items">
          <li><NavLink to="/">關於我們</NavLink></li>
          <li><NavLink to="/">議題列表</NavLink></li>
          <li><NavLink to="/">捐款支持</NavLink></li>
          <li><NavLink to="/">讀者投稿</NavLink></li>
        </ul>
      </nav>

      <ul className={isFloatNavShowed? "main-nav-float-ul block" : "hide"}>
        <li><NavLink to="/" className={isFloatNavShowed? "block" : "hide"}>關於我們</NavLink></li>
        <li><NavLink to="/" className={isFloatNavShowed? "block" : "hide"}>議題列表</NavLink></li>
        <li><NavLink to="/" className={isFloatNavShowed? "block" : "hide"}>捐款支持</NavLink></li>
        <li><NavLink to="/" className={isFloatNavShowed? "block" : "hide"}>讀者投稿</NavLink></li>
      </ul>
      <Link className={isFloatNavShowed? "close-logo block" : "hide"} to="/" onClick={actions.changeFloatNav} >
        <img className={isFloatNavShowed? "close block" : "hide"} alt="close" src="/remote-assignments/close.png" />
      </Link>

      <Link className={isOriginNavShowed ? "main-logo h-items" : "hide"} onClick={actions.changeOriginNav} to="/">
        <img className="menu" alt="menu" src="/remote-assignments/menu.png" />
      </Link>
    </header>
  );
}

export default Header;