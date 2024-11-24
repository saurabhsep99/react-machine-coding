import { useState } from "react";
import data from './data.json'

export default function ProductFilterApp(){

    const [productFilterState,setProductFilterState]=useState([])
    const [filteredData,setFilteredData]=useState(data);

    const handleFilter = (val) => {
        const filteredArray = data.filter((item) => item.category === val);
        console.log(filteredArray);
        setFilteredData(filteredArray);
        setProductFilterState(val)
      };


    return(
        <div>   


        {/* <div style={{margin:'10px',display:'flex',flexDirection:'row-reverse'}}>
           <select style={{padding:'7px',width:'200px',borderRadius:'8px'}} value={productFilterState} onChange={(e)=>handleFilter(e.target.value)}>
            {["watch","mobile","television","bags"].map((item,index)=>(
                <option value={item} key={index}>{item}</option>
            ))}
           </select>
        </div> */}

        <div>
            {["watch","mobile","television","bags"].map((item,index)=>(
                <button key={index} style={{margin:'10px',padding:'7px',width:'100px',borderRadius:'8px'}} onClick={()=>handleFilter(item)}>{item}</button>
            ))}
        </div>

        <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'30px',padding:'10px'}}>
            {filteredData?.map((item,index)=>(
                   
                   <div key={index} style={{border:'1px solid black',padding:'12px'}}>
                     <div>{item?.name}</div>
                     <div style={{padding:'5px',fontStyle:'italic'}}>{item?.category}</div>
                   </div>
                 
            ))}
        </div>
        </div>
    )
}