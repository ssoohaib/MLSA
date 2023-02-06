import React from 'react'
import './css/Main.css'

export default function Main() {
  return (
    <section id='home' className="main">
        <div className="main-container">
            <div className="main-left">
                <h1>Microsoft Learn Student<br />Ambassadors - Faisalabad</h1>
                <p>Learn | Build | Empower</p>
                <a href="">Get in Touch</a>
            </div>
            <div className="main-right">
                <img className='logo' src={require("./images/2.jpg")} alt="" />

            </div>
        </div>
    </section>
  )
}
