import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import ICard from './components/ICard'

function App() {

  return (
    <>
      <div style={({border:"10px solid red",height:"300px",width:"300px"})}>
        <h2>Welcome to React Vite</h2>
        <ICard></ICard>

      </div>
    </>
  )
}

export default App
