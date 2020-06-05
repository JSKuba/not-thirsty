import React from 'react'

import './styles/Header.css'
import Logo from './img/logo.svg'

const hamburger = <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="69" height="46.5" viewBox="0 0 69 46.5"><title>hamburger</title><g id="Group_40" data-name="Group 40"><g id="Rectangle_33" data-name="Rectangle 33"><path d="M4,.5H57a4,4,0,0,1,4,4h0a4,4,0,0,1-4,4H4a4,4,0,0,1-4-4H0A4,4,0,0,1,4,.5Z" transform="translate(0 -0.5)" fill="#e2007a"/><path d="M4,1H57a3.5,3.5,0,0,1,3.5,3.5h0A3.5,3.5,0,0,1,57,8H4A3.5,3.5,0,0,1,.5,4.5h0A3.5,3.5,0,0,1,4,1Z" transform="translate(0 -0.5)" fill="none" stroke="#fff"/></g><g id="Rectangle_34" data-name="Rectangle 34"><rect y="16.5" width="69" height="11" rx="5" fill="#f9627d"/><rect x="0.5" y="17" width="68" height="10" rx="4.5" fill="none" stroke="#fff"/></g><g id="Rectangle_35" data-name="Rectangle 35"><path d="M5,37H45a5,5,0,0,1,5,5h0a5,5,0,0,1-5,5H5a5,5,0,0,1-5-5H0A5,5,0,0,1,5,37Z" transform="translate(0 -0.5)" fill="#f9ada0"/><path d="M5,37.5H45A4.49,4.49,0,0,1,49.5,42h0A4.49,4.49,0,0,1,45,46.5H5A4.49,4.49,0,0,1,.5,42h0A4.49,4.49,0,0,1,5,37.5Z" transform="translate(0 -0.5)" fill="none" stroke="#fff"/></g></g></svg>
// const switchBtn = <svg id="svg2" xmlns="http://www.w3.org/2000/svg" width="96" height="120" viewBox="0 0 96 120"><title>switch</title><g id="g6278"><path id="path5478" d="M59.39,28c23.46,6.4,37.39,30.94,31.1,54.82s-30.41,38.05-53.87,31.65S-.78,83.53,5.51,59.65A44.39,44.39,0,0,1,36.62,28" transform="translate(0 0)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path id="path6250" d="M48,60V4" transform="translate(0 0)" fill="none" stroke="#000" stroke-linecap="round" stroke-width="8"/></g></svg>

const Header = () => {
  return (
    <header className="main-header nav-hidden">
      <div className="main-header-container">
        <div className="hamburger-container">
          {hamburger}
        </div>
        <div className="logo-container">
          <img className="logo" src={Logo} alt="logo" />
          <h1>!Thirsty</h1>
        </div>
        <nav className="main-nav">
          <ul>
            <li className="nav-item">Start</li>
            <li className="nav-item">Menu</li>
            <li className="nav-item">Random</li>
            <li className="nav-item">About</li>
            <li className="nav-item">Contact</li>
          </ul>
        </nav>
      </div>
      <div className="dark-mode-switch-container">
        <div className="dark-mode-switch">
          <input id="dark-mode-switch" type="checkbox" />
        </div>
        <span className="dark-mode-switch-label">Dark Mode</span>
      </div>
    </header> 
  )
}

export default Header