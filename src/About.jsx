import React from 'react'
import "./css/About.css"
import AboutCard from './AboutCard'


export default function About() {
  return (
    <section id='about' className="about">
        <div className="about-container">
            <div className="about-heading">
                <p>Lorem</p>
                <h1>What We Do</h1>
            </div>
            <div className="about-bottom">
                <AboutCard />
                <AboutCard />
                <AboutCard />
            </div>
            
        </div>
    </section>
  )
}
