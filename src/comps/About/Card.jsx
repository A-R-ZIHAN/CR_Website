import React from 'react';
import './About.css';

function Card(props) {
  return (
    <div id="card" className={props.className}>
      <div>
        <img style={{textAlign:"center"}} src={props.profile} id="profileCard" width="30%"  alt=""/> <br/>
       <h3>{props.name}</h3> <br/>
        <p >{props.text}</p>
      </div>
    </div>
  )
}


export default Card
