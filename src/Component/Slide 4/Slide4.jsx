import React from 'react'
import "./Slide4.css"

const Slide4 = () => {
  return (
    <div className="slide4_container  wrapper">
        <div className="future_talent">
           <p style={{fontWeight:"bold",fontSize:"1.5em",color:"#7244C8"}}>Discover the Future 
           <span style={{fontWeight:"normal"}}>of Talent<span style={{display:"block"}}>Assessment!</span> </span></p>
           <p style={{fontSize:"1em"}}>Facing challenges in traditional hiring?
Uncover the costs, pitfalls, and the game-changing role of Generative AI in recruitment.</p>
    <>
          <small>🔍 Inside this Whitepaper:
Manual vs. Machine-based hiring: Costs & Challenges.
The truth about "Interview as a Service."
Generative AI: The simple explanation. Optimize Your Hiring Process Today!</small>
</>
<button style={{padding:"10px 15px",backgroundColor:"#7244C8"
,display:"block",color:"#ffff" ,borderRadius:"5px",fontSize:"1em",
outline:"none",marginTop:"15px"}}>Download for samrter Recruitment</button>
        </div>
        <div className="future_pic">
            <img src="./assets/future.png" className='future_pic'/>
        </div>
    </div>
  )
}

export default Slide4