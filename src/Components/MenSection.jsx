import React from 'react'
import "./Hero.css"

const MenSection = () => {
  return (
    <>
    <main className='herocontainer'>
        <div className="hero-content">
            <div className="features">
            <h1>NOTHING BEATS THE CITY</h1>
            <p>Build to overcome anything the city throws your way.</p>
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
            <img src='/images/menshoe.png' alt='shoe image'/>
        </div>
      </main>
    </>
  )
}

export default MenSection
