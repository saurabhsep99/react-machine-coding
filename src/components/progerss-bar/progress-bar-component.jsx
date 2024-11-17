import { useState } from 'react'

function ProgressBarComponent({progressionNumber=0,color}) {
    return (
        <div style={{overflow: "hidden",width:"100%",height:'30px',border:'1px solid black',borderRadius:'20px',color:'white'}}>
           
           <div style={{width:`${progressionNumber}%`,height:'30px',borderRadius:'20px', transition: "width 0.5s ease",backgroundColor:`${color}`}}>
           {progressionNumber}%
           </div>
          
        </div>
    )
}

export default ProgressBarComponent;