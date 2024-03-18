import React, { useState } from 'react'
import './Slide2.css'
import data from './data'
import Card from './Card/Card'

const Slide2 = () => {
    const[info,setinfo]=useState(data)
  return (
    <div className='wrapper'>
        <div className="title_slide2 ">
       <h3>Our Amazing Benefits <span className='title_span'>Helpful For Your Hiring</span></h3>
        </div>
        <div className="info_container ">
            {info.map(item=>(<>
            <Card item={item}/>
            </>))}
        </div>
    </div>
  )
}

export default Slide2