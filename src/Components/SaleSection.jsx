import React from 'react'
import "./Hero.css"

const SaleSection = () => {
  return (
    <>
    <main className='herocontainer'>
        <div className="hero-content">
            <div className="features">
            <h1>NIKE AIR FORCE 1 '07</h1>
            <p>Don't miss out on our limited-time sale on Nike shoes! Enjoy unbeatable discounts on our stylish and comfortable collection, including sleek sneakers, classic loafers, and trendy boots.</p>
            </div>
            

        <div className="hero-btn">
            <button className='first-btn'>Shop Now</button>
            <button className='second-btn'>Category</button>
        </div>
        <div className="shopping">
            <p>Also Available On</p>
            <div className="brand-icons">
                <img src='images/amazon.png' alt='amazon image'/>
                <img src='/images/flipkart.png' alt='flipkart image'/>
            </div>
        </div>
        </div>
        <div className="hero-img">
            <img src='/images/saleshoe.png' alt='shoe image'/>
        </div>
      </main>
    </>
  )
}

export default SaleSection
