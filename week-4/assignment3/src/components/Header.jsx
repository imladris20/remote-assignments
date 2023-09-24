import React, { useContext } from 'react';
import { NavLink, Link } from 'react-router-dom';
import DataContext from '../context/DataContext';

const Header = () => {

  const { isOriginNavShowed, isFloatNavShowed, actions } = useContext(DataContext);


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

      {isFloatNavShowed
        ? <>
            <ul className="main-nav-float-ul" style={{ display: 'block' }}>
              <li><NavLink to="/" style={{ display: 'block' }}>關於我們</NavLink></li>
              <li><NavLink to="/" style={{ display: 'block' }}>議題列表</NavLink></li>
              <li><NavLink to="/" style={{ display: 'block' }}>捐款支持</NavLink></li>
              <li><NavLink to="/" style={{ display: 'block' }}>讀者投稿</NavLink></li>
            </ul>
            <Link className="close-logo" href="#" style={{ display: 'block' }} onClick={actions.changeFloatNav} >
              <img className="close" alt="close" src="./close.png" style={{ display: 'block' }}/>
            </Link>
          </>
        : <>
            <ul className="main-nav-float-ul" style={{ display: 'none' }}>
              <li><NavLink to="/" style={{ display: 'none' }}>關於我們</NavLink></li>
              <li><NavLink to="/" style={{ display: 'none' }}>議題列表</NavLink></li>
              <li><NavLink to="/" style={{ display: 'none' }}>捐款支持</NavLink></li>
              <li><NavLink to="/" style={{ display: 'none' }}>讀者投稿</NavLink></li>
            </ul>
            <Link className="close-logo" href="#" style={{ display: 'none' }} onClick={actions.changeFloatNav}>
              <img className="close" alt="close" src="./close.png" style={{ display: 'none' }} />
            </Link>
          </>
      }

      {isOriginNavShowed
        ? <Link className="main-logo h-items" onClick={actions.changeOriginNav} to="#">
            <img className="menu" alt="menu" src="./menu.png" />
          </Link>
        : <Link className="main-logo h-items" onClick={actions.changeOriginNav} to="#" style={{ display: 'none' }}>
            <img className="menu" alt="menu" src="./menu.png" />
          </Link>
      }
    </header>
  );
}

export default Header;