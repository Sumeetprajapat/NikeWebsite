import React from 'react'
import "./Mobile.css"

const Mobile = ({isOpen, toggleMenu}) => {
  return (
    <>
        <div className={`mobile-menu ${isOpen ? "active" : ""}`} onClick={toggleMenu}>
            <div className="mobile-menu-container">
            <div className="mobile-logo"><img src='/images/brand_logo.png' /></div>
            <ul>
            <li><a href='/' className='menu-item'>Home</a></li>
            <li><a href='/NewSection' className='menu-item'>New & Featured</a></li>
            <li><a href='/MenSection' className='menu-item'>Men</a></li>
            <li><a href='/WomenSection' className='menu-item'>Women</a></li>
            <li><a href='/KidSection' className='menu-item'>Kids</a></li>
            <li><a href='/SaleSection' className='menu-item'>Sale</a></li>
            <li><a href='/SNKRSSection' className='menu-item'>SNKRS</a></li>
            </ul>
            </div>

        </div>
    </>
  )
}

export default Mobile
