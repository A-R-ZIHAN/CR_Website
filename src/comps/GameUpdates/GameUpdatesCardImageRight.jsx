import React from 'react'

function GameUpdatesCardImageRight(props) {
  return (
    <div>
      <section id="sectionGameUpdates">


    <div id="textDivGameUpdates">
  <h1>{props.heading}</h1>
      <p>{props.paragraph}</p>
    </div>


    <div id="imgDivGameUpdates">
      <img width="100%" height="50%"  src={props.image} alt=""/>
    </div>


    </section>
        </div>
  )
}

export default GameUpdatesCardImageRight
