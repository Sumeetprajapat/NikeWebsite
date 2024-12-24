import React from 'react'
import "./Hero.css"

const KidSection = () => {
  return (
    <>
    <main className='herocontainer'>
        <div className="hero-content">
            <div className="features">
            <h1>KIDS' AIR MAX 90 EASYON</h1>
            <p>Help you little ones faster their fit fast and get on with their day. Playtime, here we come!</p>
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
            <img src='/images/kidshoe.png' alt='shoe image'/>
        </div>
      </main>
    </>
  )
}

export default KidSection
