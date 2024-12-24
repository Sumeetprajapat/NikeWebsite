import React from 'react'
import "./Hero.css"

const SNKRSSection = () => {
  return (
    <>
    <main className='herocontainer'>
        <div className="hero-content">
            <div className="features">
            <h1>LIGHT BRITISHTAN AND PINKSICLE LD-1000</h1>
            <p>LD-1000 is a retro-inspired sneaker that combines classic style with modern comfort. Featuring a sleek, lightweight design, it offers a breathable mesh upper with suede overlays for a premium feel.</p>
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
            <img src='/images/SNKRS.png' alt='shoe image'/>
        </div>
      </main>
    </>
  )
}

export default SNKRSSection
