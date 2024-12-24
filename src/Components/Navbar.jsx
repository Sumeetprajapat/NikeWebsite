import React,{useState} from 'react'
import "./Navbar.css"
import Mobile from './Mobile';

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu =()=>{
    setOpenMenu(!openMenu)
  };
  return (
      <>
      <Mobile isOpen={openMenu} toggleMenu={toggleMenu}/>
      <nav className='nav-wrapper'>
        <div className="nav-content">
        <div className="logo">
            <img src='/images/brand_logo.png' />
        </div>
        <ul>
            <li><a href='/' className='menu-item'>Home</a></li>
            <li><a href='/NewSection' className='menu-item'>New & Featured</a></li>
            <li><a href='/MenSection' className='menu-item'>Men</a></li>
            <li><a href='/WomenSection' className='menu-item'>Women</a></li>
            <li><a href='/KidSection' className='menu-item'>Kids</a></li>
            <li><a href='/SaleSection' className='menu-item'>Sale</a></li>
            <li><a href='/SNKRSSection' className='menu-item'>SNKRS</a></li>
        </ul>
        
        <button className='nav-btn'>Login</button>
        <button className='menu-btn' onClick={toggleMenu}>{openMenu ? "×" : "≡"}
            </button>
        </div>
      </nav>
      </>
  )
}

export default Navbar
