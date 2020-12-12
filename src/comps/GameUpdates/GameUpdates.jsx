import React from 'react';
import GameUpdatesCardImageLeft from './GameUpdatesCardImageLeft';
import GameUpdatesCardImageRight from './GameUpdatesCardImageRight';
import "./GameUpdates.css";

const GameUpdates = ()=>{
return(
  <>
  
 <GameUpdatesCardImageRight heading="Meet Captain Akbar. More details coming soon." 
 image="/images/CaptainAkbar.png"/>
 <GameUpdatesCardImageLeft heading="What Machine Gun do you guys want on this beast?" image="/images/Humba.png"/>
 <GameUpdatesCardImageRight heading="M4A1+Aimpoint CompM4s" image="/images/Aimpoint.png"/>
 
 <GameUpdatesCardImageLeft heading="'I want my son to be an engineer. But he, he wants to join the army. What kind of dream is this?'" image="/images/img1.png"/>
  </>
)
}


export default GameUpdates;