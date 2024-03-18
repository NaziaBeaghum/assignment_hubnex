import React from 'react'
import './Slide1.css'

const Slide1 = () => {
  return (
    <div className='wrapper'>

        <div className="navbar">

            
            <ul className="navlist">
                    <img src="./assets/rework_logo.png" alt="" className='rework_logo list_items'/>
                    <li className='list_items'><a >Talent Finder</a></li>
                    <li className='list_items'><a >For recruiters</a></li>
                    <li className='list_items'><a>For employers</a></li>
                    <li className='list_items'><a >About us</a></li>
                    <li className='list_items'><a >Company</a></li>
                </ul>
            

            <div className="flex_item2">
                <button className='nav_button'>Login In</button>
                <button  className='nav_button'>Get started</button>
            </div>
        </div>

        <div className="title">Power Up Your Hiring<span>with Rework</span>
        </div>

     <>
        <div className="demo_container">
            <small>Empower your business with cutting-edge A.I. technology, 
                simplified processes, and top-tier talent connections. Rework is your 
                strategic partner in redefining how you hire </small>

            <button className='demo_button'>Book a Demo</button>
        </div>

        <div className="group_img">
            <img src="./assets/group.png" alt=""></img>
            <img src="./assets/group1.png" alt="" className='group1'/>
        </div>
       
            <div className="frame_5144">
                <img src="./assets/Points.png " className='circle vector'></img>
            </div>
         </>
         <div className="icon_container ">
            <p>Hire for 1000+ Brands Including</p>
            <div className="flex">
               <img src="./assets/google.png" alt="" className='icon_img'/>
               <img src="./assets/amazon.png" alt="" className='icon_img'/>
               <img src="./assets/nokia.png" alt="" className='icon_img'/>
               <img src="./assets/spotify.png" alt="" className='icon_img'/>
               <img src="./assets/microsoft.png" alt="" className='icon_img'/>
               <img src="./assets/google.png" alt="" className='icon_img'/>
               <img src="./assets/amazon.png" alt="" className='icon_img'/>
            </div>
    </div>
 </div>
  )
}

export default Slide1