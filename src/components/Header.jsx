import React from 'react'
import Logo from '../images/logo.png'

function Header() {
  return (
        <header id="header">
        <div class="container">
            <div class="hold">
                <div class="logo">
                    <a href="#">
                        <img src={Logo} alt="logo" width="68"/>
                    </a>
                </div>
                <input id="opener" type="checkbox"/>
                <label for="opener"><span>opener</span></label>
                <nav id="nav">
                    <ul class="main-menu">
                        <li><a href="#">About us </a></li>
                        <li><a href="#">Reservation</a></li>
                        <li><a href="#">Gallery</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Elements</a></li>
                        <li><a href="#">Shop</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
  )
}

export default Header