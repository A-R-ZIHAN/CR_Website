import React from 'react'

function SysReq(props) {
  return (
    <div>
      
      
      <table style={{border:"1px solid",width:"90%",margin:"5%",marginTop:"2%"}}>
        <tr>
        <th style={{border:"1px solid"}}>{props.first}</th>
        <td>{props.firstName}</td>
        </tr>
        
        <tr>
        <th style={{border:"1px solid",width:"50%"}}>{props.second}</th>
         <td>{props.secondName}</td>
        </tr>
        
        <tr>
        <th style={{border:"1px solid"}}>{props.third}</th>
        <td>{props.thirdName}</td>
        </tr>
        
        <tr>
        <th style={{border:"1px solid"}}>{props.fourth}</th>
        <td>{props.fourthName}</td>
        </tr>
        
        <tr>
        <th style={{border:"1px solid"}}>{props.fifth}</th>
        <td>{props.fifthName}</td>
        </tr>
        
      </table>
    </div>
  )
}

export default SysReq
