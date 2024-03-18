import React from 'react'
import './Slide.css'
import data from './data'
import { useState } from 'react'
import Card from '../Slide2/Card/Card'


const Slide = () => {
    const[info,setinfo]=useState(data)
  return (
    <div className="wrapper">
        <div className='slide3_container'>
            <p style={{textAlign:'center',color:"#7244C8",fontWeight:"bold",fontSize:"24px"}}>
                How our System <span style={{fontWeight:"normal"}}>Operates</span></p>
        </div>
        <div className="info_container">
        {info.map(item=>(<>
            <Card item={item}/>
            </>))}
        </div>
        <button  className="btn"style={{padding:"5px 10px",borderRadius:"5px"}}>Get Started</button>

    </div>
  )
}

export default Slide