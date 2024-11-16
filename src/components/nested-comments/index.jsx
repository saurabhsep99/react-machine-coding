import {  useState } from 'react'
import  Comments from './comments'

let data=[
    {
        id:"1",
        name:"nice",
        children:[
            {
                id:"2",
                name:"smart"
            },
            {
                id:"3",
                name:"rockstar"
            }

        ]
    },
    {
            id:"4",
            name:"awesome",
            children:[]
        
    }
    
]

function NestedComponents()
{ 

    return(
        <>
            {
               data?.map((item)=>(
                <Comments key={item.id} data={item}/>
               )) 
            }
          </>
    
    )
     
}

export default NestedComponents;