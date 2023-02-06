import React from 'react'
import "./css/TeamCard.css"

export default function TeamCard(props) {
  return (
    <div className="team-card">
        <div className="card-left">
            <img src={require(''+props.img)} alt="" />
        </div>
        <div className="card-right">
            <h1>{props.name}</h1>
            <p>{props.rank} <span>@MLSA</span> </p>
            <ul>
                <li><a href={props.linkedin}><i class="fa-brands fa-linkedin-in"></i></a></li>
                <li><a href={props.twitter}><i class="fa-brands fa-twitter"></i></a></li>
                <li><a href={"mailto:"+props.email}><i class="fa-solid fa-envelope"></i></a></li>
            </ul>
        </div>
    </div>
  )
}
