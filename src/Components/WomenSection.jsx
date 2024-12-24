import React from 'react'
import "./Hero.css"

const WomenSection = () => {
  return (
    <>
    <main className='herocontainer'>
        <div className="hero-content">
            <div className="features">
            <h1>RUN IN THE DARK</h1>
            <p>Ahead of its time, the iconic Shox TL pushes the boundaries of style with its future-forward silhouette.</p>
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
            <img src='/images/womenshoe.png' alt='shoe image'/>
        </div>
      </main>
    </>
  )
}

export default WomenSection
