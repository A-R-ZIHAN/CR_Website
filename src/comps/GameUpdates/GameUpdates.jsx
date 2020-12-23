import React from 'react';
import GameUpdatesCardImageLeft from './GameUpdatesCardImageLeft';
import GameUpdatesCardImageRight from './GameUpdatesCardImageRight';
import "./GameUpdates.css";
import { useEffect,useState } from 'react';

const GameUpdates = ()=>{
const [postData,setPostData] = useState([]);
useEffect(()=>{

  fetch('/allposts',{
    method:"GET",
    headers:{
      "Content-Type":"application/json"
    }
  }).then(res=>res.json())
  .then(result=>{
    setPostData(result.posts)
    console.log(result.posts)
  })
  .catch(err=>{console.log(err)})
   
},[])

return(
 <> 
{postData.length?
<div>
  {postData[0]?
 <GameUpdatesCardImageRight heading={postData[0].description}
 image={postData[0].pic}/>:"No items to show"
  }
  {postData[1]?
    <GameUpdatesCardImageLeft heading={postData[1].description} image={postData[1].pic}/>:"No items to show"
  }
  {postData[2]?
    <GameUpdatesCardImageRight heading={postData[2].description} image={postData[2].pic}/>:"No items to show"
  }
 
  {postData[3]?
    <GameUpdatesCardImageLeft heading={postData[3].description} image={postData[3].pic}/>:"No items to show"
  }

 </div>
 
 :"No pics to show"
}
  </>
)
}


export default GameUpdates;