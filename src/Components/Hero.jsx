import React from 'react'
import "./Hero.css"

const Hero = () => {
  return (
    <div>
      <>
      <main className='herocontainer'>
        <div className="hero-content">
            <div className="features">
            <h1>YOUR FEET DESERVES THE BEST</h1>
            <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.</p>
            </div>
            

        <div className="hero-btn">
            <button className='first-btn'>Shop Now</button>
            <button className='second-btn'>Category</button>
        </div>
        <div className="shopping">
            <p>Also Available On</p>
            <div className="brand-icons">
            <a href="https://www.amazon.com" target="_blank" rel="noopener noreferrer">
        <img src="images/amazon.png" alt="amazon image" />
    </a>
    <a href="https://www.flipkart.com" target="_blank" rel="noopener noreferrer">
        <img src="/images/flipkart.png" alt="flipkart image" />
    </a>
</div>

        </div>
        </div>
        <div className="hero-img">
            <img src='/images/homeshoe.png' alt='shoe image'/>
        </div>
      </main>
      </>
    </div>
  )
}

export default Hero
