import React from 'react'
import { useState } from 'react'
const ChangebgColor = () => {
    const [red,setRed]=useState(255)
    const [green,setGreen]=useState(0)
            const [blue,setBlue]=useState(0)


   
  return (
    <div>
      <h2>Change Background Color</h2>
      <div style={{backgroundColor:`rgb(${red},${green},${blue})`,border:"2px solid red",height:"100px",width:"300px"}}>

      </div>
      <div>

      </div>
    </div>
  )
}

export default ChangebgColor
