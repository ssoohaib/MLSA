import React from 'react'
import "./css/Events.css"
import EventsCard from "./EventsCard"


export default function Events() {
    return (
        <section id='events' className="events">
            <div className="events-container">
                <div className="events-heading">
                    <p>Lorem</p>
                    <h1>Lorem ipsum dolor sit amet.</h1>
                </div>
                <div className="events-bottom">
                    <div className="events-row">
                        
                        <EventsCard 
                            title={"Title"}
                            details={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia animi adipisci dolore quas pariatur voluptatum repudiandae alias voluptatem est incidunt, aspernatur optio cumque aliquid."}
                            img={"./images/2.jpg"}                            
                        />
                        <EventsCard 
                            title={"Title"}
                            details={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia animi adipisci dolore quas pariatur voluptatum repudiandae alias voluptatem est incidunt, aspernatur optio cumque aliquid."}
                            img={"./images/2.jpg"}                            
                        />
                        <EventsCard 
                            title={"Title"}
                            details={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia animi adipisci dolore quas pariatur voluptatum repudiandae alias voluptatem est incidunt, aspernatur optio cumque aliquid."}
                            img={"./images/2.jpg"}                            
                        />
                    </div>
                    <div className="events-row">
                        <EventsCard 
                            title={"Title"}
                            details={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia animi adipisci dolore quas pariatur voluptatum repudiandae alias voluptatem est incidunt, aspernatur optio cumque aliquid."}
                            img={"./images/2.jpg"}                            
                        />
                        <EventsCard 
                            title={"Title"}
                            details={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia animi adipisci dolore quas pariatur voluptatum repudiandae alias voluptatem est incidunt, aspernatur optio cumque aliquid."}
                            img={"./images/2.jpg"}                            
                        />
                        <EventsCard 
                            title={"Title"}
                            details={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia animi adipisci dolore quas pariatur voluptatum repudiandae alias voluptatem est incidunt, aspernatur optio cumque aliquid."}
                            img={"./images/2.jpg"}                            
                        />
                    </div>
                </div>
            </div>
        </section>
  )
}
