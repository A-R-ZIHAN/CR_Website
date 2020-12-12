import React, { useState } from 'react';
import SysReq from './SysReq';



// So this is the homepage
const Home = ()=>{

  


return(
  <>
    <div className="gameLogoText">
      <h3>Upcoming GAME!</h3>
      <h1 id="leftText">COUNTRY</h1>
      <h1 id="rightText">RECALLS</h1>
    </div>

    <h1 style={{width:"100%",textAlign:"center"}}>Minimum System Requirements</h1>
    <SysReq first="Storage" firstName="1TB HDD" second="Ram" secondName="8GB" third="Processor" thirdName="Ryzen 5" fourth="Video Card" fourthName="100% DirectX 10 compatible." fifth="GPU" fifthName="GT 1030"/>
    <h1 style={{width:"100%",textAlign:"center"}}>Required System Requirements</h1>
    <SysReq first="Storage" firstName="1TB HDD" second="Ram" secondName="8GB" third="Processor" thirdName="Ryzen 5" fourth="Video Card" fourthName="100% DirectX 10 compatible." fifth="GPU" fifthName="GT 1030"/>
  </>

)
}
export default Home;