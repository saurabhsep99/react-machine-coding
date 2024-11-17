import { useEffect, useState } from 'react'
import ProgressBarComponent from './progress-bar-component'

function ProgressBar() {
    const [percenTage,setPercentage]=useState(0)

useEffect(()=>{

    let interval=setInterval(()=>{
            setPercentage(prev=>{
                if(prev==100) return prev;
                return prev+1;
            })
           
    },100)
    return ()=>clearInterval(interval)
},[])
    return (
        <div className="progress-bar">
           <ProgressBarComponent color='blue' progressionNumber={percenTage}/>
        </div>
    )
}

export default ProgressBar;