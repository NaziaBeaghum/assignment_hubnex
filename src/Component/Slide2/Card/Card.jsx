import React from 'react'
import './Card.css'

const Card = ({item}) => {
  return (
   <div className="card_container">
       <img src={item.src} alt="" className='card_img'/>
       <p>{item.title1}</p>
       <p>{item.title2}</p>
       <small>{item.p}</small>
   </div>
  )
}

export default Card