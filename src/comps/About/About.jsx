import React from 'react';
import Card from './Card';
import "./About.css"

// About Page
const Navbar = ()=>{
return(
  <>
  <Card profile="/images/Profile/Zihan.jpg" name="A.R Zihan" text="2d Artist,Visual Designer,Web Developer"/>
  <Card profile="/images/Profile/Jahin.png" name="Jahin Hossain" text="Lead Developer,Programmer,Level Designer"/>
  <Card profile="images/Profile/Aziz.jpg" name="Toufique Aziz" text="Lead Story Writer,Map Designer"/>
  <Card profile="images/Profile/Aureek.jpg" name="Aureek Arefin" text="Lead 3d Modeller, Character Artist"/>
  <Card profile="images/Profile/Tazwar.jpg" name="Abdullah Irshad" text="Lead Animator, 3d Modeller, Sound Designer"/>
  <Card profile="images/Profile/Yousuf.jpg" name="Sheikh Yousuf" text="Facial Rigging, Sound Designer"/>
  <Card profile="images/Profile/Faiyaz.jpg" className="lastCard" name="Faiyaz Rashid" text="3d Modeller"/>
<hr/>

  <h1 style={{width:"100%",textAlign:"center"}}>Contact with US</h1> <br/>
<div id="contact">


  <div id="discordDiv">
  <h3 id="discordJoiningText">Join Our Discord Server</h3>

  {/* Discord Server Link  */}
  <iframe id="discordServer" src="https://discord.com/widget?id=744565347948036258&theme=dark" width="350" height="250" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
  </div>

  <div>
    <h3 id="facebookJoiningText">Like our Facebook Page</h3>
    <div id="facebookPage" class="fb-page" data-href="https://www.facebook.com/CountryRecalls/" data-tabs="timeline" data-width="" data-height="" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/CountryRecalls/" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/CountryRecalls/">Country Recalls</a></blockquote></div>
  </div>

  </div>

  </>
)
}

export default Navbar;