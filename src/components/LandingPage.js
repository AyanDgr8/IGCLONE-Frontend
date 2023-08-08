// components/LandingPage.js
import React from "react";
import './styles/LandingPage.css'
import { useNavigate } from 'react-router-dom'
import landing_image from './images/lens-1418954.png'

function LandingPage() {
  let Navigate=useNavigate()
  return (
    <div>
      <div className="container">
        <section className="left">
            <img src={landing_image} alt="" />
        </section>
        <section className="right">
            <h3>10X Team 04</h3>
            <button onClick={()=>Navigate('/post')}>ENTER</button>
        </section>
      </div>
    </div>
  )
}

export default LandingPage;
