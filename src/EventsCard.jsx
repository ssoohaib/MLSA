import React from 'react'
import "./css/EventsCard.css"

export default function EventsCards(props) {
  return (
    <div className="event-card">
      <div className="card-upper">
        <img src={require(''+props.img)} alt="" />
      </div>
      <div className="card-bottom">
        <h1>{props.title}</h1>
        <p>{props.details}</p>
        <p className='reg-btn'>Register</p>
      </div>
    </div>
  )
}
