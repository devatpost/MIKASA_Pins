import React from 'react'
import logo from '../../assets/LOGO.svg'
import whiteCalender from '../../assets/book_Icon.svg'
import tutorial from '../../assets/iIcon.svg'
import userHeader from '../../assets/userHeader.svg'
import cart from '../../assets/icon_header.svg'
import './header.css'

const Header = () => {


  return (
    <>
        <div className="black-header">
          <div className="header-icon-container">
              <a href="https://www.mikasahub.com" target="_self">
                  <img src={logo} alt="Icon" className="header-icon"/>
              </a>
              <a href="https://www.mikasahub.com/products" target="_self">
                  <div className="header_heading">Products</div>
              </a>
              <a href="https://www.mikasahub.com/blog" target="_self">
                  <div className="header_heading">Blog</div>
              </a>
              <a href="https://www.mikasahub.com/contact" target="_self">
                  <div className="header_heading">Contact</div>
              </a>
          </div>

          <div className="sideIcon">
            <a href="https://calendly.com/tarang-post105/30min" target="_self">
              <div className="demoButton" data-tooltip="Demo">
                <div className="demoText">Book a Demo</div>
                <img id="demoIcon" src={whiteCalender} alt="New Icon"/>
              </div>
            </a>
              <img id="newIcon" src={tutorial} alt="New Icon" data-tooltip="Tutorial"/>
              <img id="userInfo" src={userHeader} alt="New Icon" data-tooltip="User Info"/>
              <img id="cartPopup" src={cart} alt="New Icon" data-tooltip="Cart"/>
          </div>
      </div>
    </>
  )
}

export default Header
