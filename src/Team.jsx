import React from 'react'
import "./css/Team.css"
import TeamCard from './TeamCard'

export default function Team() {
  return (
    <section id='team' className="team">
        <div className="team-container">
            <div className="team-heading">
                <p>Lorem</p>
                <h1>Lorem ipsum dolor.</h1>
            </div>
            <div className="team-bottom">
                <div className="team-row">
                    <TeamCard 
                        name={"Name"}
                        rank={"GOLD - MLSA"}
                        img={"./images/avatar.jpg"}
                        linkedin={""}
                        twitter={""}
                        email={""}
                    />
                    <TeamCard 
                        name={"Name"}
                        rank={"GOLD - MLSA"}
                        img={"./images/avatar.jpg"}
                        linkedin={""}
                        twitter={""}
                        email={""}
                    />
                    <TeamCard 
                        name={"Name"}
                        rank={"GOLD - MLSA"}
                        img={"./images/avatar.jpg"}
                        linkedin={""}
                        twitter={""}
                        email={""}
                    />
                </div>
                <div className="team-row">
                <TeamCard 
                        name={"Name"}
                        rank={"GOLD - MLSA"}
                        img={"./images/avatar.jpg"}
                        linkedin={""}
                        twitter={""}
                        email={""}
                    />
                    <TeamCard 
                        name={"Name"}
                        rank={"GOLD - MLSA"}
                        img={"./images/avatar.jpg"}
                        linkedin={""}
                        twitter={""}
                        email={""}
                    />
                    <TeamCard 
                        name={"Name"}
                        rank={"GOLD - MLSA"}
                        img={"./images/avatar.jpg"}
                        linkedin={""}
                        twitter={""}
                        email={""}
                    />
                </div>
                <div className="team-row">
                <TeamCard 
                        name={"Name"}
                        rank={"GOLD - MLSA"}
                        img={"./images/avatar.jpg"}
                        linkedin={""}
                        twitter={""}
                        email={""}
                    />
                    <TeamCard 
                        name={"Name"}
                        rank={"GOLD - MLSA"}
                        img={"./images/avatar.jpg"}
                        linkedin={""}
                        twitter={""}
                        email={""}
                    />
                    <TeamCard 
                        name={"Name"}
                        rank={"GOLD - MLSA"}
                        img={"./images/avatar.jpg"}
                        linkedin={""}
                        twitter={""}
                        email={""}
                    />
                </div>
            </div>
        </div>
    </section>
  )
}
