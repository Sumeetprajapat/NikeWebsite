import React from 'react'
import "./Hero.css"

const NewSection = () => {
  return (
    <>
    <main className='herocontainer'>
        <div className="hero-content">
            <div className="features">
            <h1>TATUM 3 PF 'WELCOME TO THE GARDEN'</h1>
            <p>Tatum 3 PF by Nike is a high-performance basketball shoe designed for speed, agility, and support. Featuring a sleek, modern design, the shoe offers a breathable mesh upper with synthetic overlays for added durability.</p>
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
            <img src='/images/newshoe.png' alt='shoe image'/>
        </div>
      </main>
    </>
  )
}

export default NewSection
