import React, { useState } from 'react';
import SysReq from './SysReq';
import "./Home.css";


// So this is the homepage
const Home = ()=>{

  


return(
  <>
    <div className="gameLogoText">
      <h3>Upcoming GAME!</h3>
      <h1 id="leftText">COUNTRY</h1>
      <h1 id="rightText">RECALLS</h1>
    </div>
    <br/> <br/>
    <h1 style={{width:"100%",textAlign:"center"}}>Minimum System Requirements</h1>
    <SysReq 
    first="Operating System" 
    firstName="Windows 7/8/10" 
    
    second="Processor" 
    secondName="Not Announced Yet" 
    
    third="Processor" 
    thirdName="Not Announced Yet" 
    
    fourth="Memory" 
    fourthName="Not Announced Yet" 
    
    fifth="GPU" 
    fifthName="Not Announced Yet"/>

    <h1 style={{width:"100%",textAlign:"center"}}>Required System Requirements</h1>
    <SysReq 
    first="Operating System" 
    firstName="Windows 7/8/10" 
    
    second="Processor" 
    secondName="Not Announced Yet" 
    
    third="Processor" 
    thirdName="Not Announced Yet" 
    
    fourth="Memory" 
    fourthName="Not Announced Yet" 
    
    fifth="GPU" 
    fifthName="Not Announced Yet"/>
  </>

)
}
export default Home;