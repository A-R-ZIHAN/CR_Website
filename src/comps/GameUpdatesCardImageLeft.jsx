import React from 'react'

function GameUpdatesCardImageLeft(props) {
  return (
    <div>
      <section id="sectionGameUpdates">


 


    <div id="imgDivGameUpdates">
      <img width="100%" height="50%"  src={props.image} alt=""/>
    </div>

    <div id="textDivGameUpdatesImageLeft">
  <h1>{props.heading}</h1>
      <p>{props.paragraph}</p>
    </div>
    </section>
        </div>
  )
}

export default GameUpdatesCardImageLeft
