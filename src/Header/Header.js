// import logo from './logo.svg';
import React from "react";
import Polygon from "../assets/Polygon 1.png"

function Header() {

  return (
    <>
      <header class="header">
        <div class="container">
          <div class="header__inner">
            <a class="logo" href="#">Skilline</a>
            <img class="romb" src={Polygon} alt="" />
              <nav class="menu">
                <ul class="menu__list">
                  <li class="menu__list-item">
                    <a class="menu__list-link" href="#">Home</a>
                  </li>
                  <li class="menu__list-item">
                    <a class="menu__list-link" href="#">Careers</a>
                  </li>
                  <li class="menu__list-item">
                    <a class="menu__list-link" href="#">Blog</a>
                  </li>
                  <li class="menu__list-item">
                    <a class="menu__list-link" href="#">About Us</a>
                  </li>
                  <button class="menu__list_button1">
                    Login
                  </button>
                  <button class="menu__list_button2">
                    Sign Up
                  </button>
                </ul>
              </nav>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header;
