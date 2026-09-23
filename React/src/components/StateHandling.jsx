import React from 'react'
import { useState } from 'react'

const StateHandling = () => {
    // const [count,setCount]=useState(100)
    const [color,setColor]=useState()
    function increament(){
        setCount(count+20);
    }
    function decreament(){
        setCount(count-30);
    }
    fun
  return (
    <div>
      <h2>count={count}</h2>
      <button onClick={increament}>increament</button>
      <button onClick={decreament}>Decreament</button>
    </div>
  )
}

export default StateHandling
