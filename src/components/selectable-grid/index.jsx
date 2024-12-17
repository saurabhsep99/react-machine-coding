import React, { useEffect, useState } from 'react'


function generateMatrix() {
    let rows = [];
    for (let i = 0; i <= 9; i++) {
        
        for (let j = 0; j <= 9; j++) {
            rows.push({
                pos: [i, j],
                color: false
            });
        }
        
    }
    return rows;
}

const SelectableGrid = () => {

    const [matrix, setMatrix] = useState([]);
   const [selected,setSelected]=useState([]);
    const [boundry,setBoundry]=useState([]);


    useEffect(() => {
        let matrixArr = generateMatrix();
        setMatrix(matrixArr)
    }, [])


const handleMouseUp=(pos)=>{
    setSelected(false)
    setBoundry([])
}

const handleMouseDown=(pos)=>{    
    setSelected(true)
    let firstSelectedOption=pos.join('');
    setBoundry([firstSelectedOption])
}

const createBoundry=(pos)=>{
    let maxRowa= pos/10;
    let maxColumns=pos%10;
    let newPosArr=[]

    for(let i=0;i<=maxRowa;i++){
        {
            for(let j=0;j<=maxColumns;j++){
                newPosArr.push(`${i}${j}`)
            }

        }
        setBoundry([...boundry,...newPosArr])
    

}}

const handleMouseEnter=(pos)=>{   
    if(selected===true)
        {
            let stringifiedPos=pos.join('');
            createBoundry(stringifiedPos)
        }  
    
}

console.log('boundry',boundry);

    return (
        <div className='grid' style={{display:'flex',height:'500px',width:'500px'}}>
            <div className='board' style={{display:'grid',gridTemplateColumns:'repeat(10,1fr)',gridTemplateRows:'repeat(10,1fr)',height:'500px',width:'500px'}}> 
                {matrix.map((item, index) => (
                    <div  className='cell' onMouseDown={()=>handleMouseDown(item.pos)} onMouseUp={()=>handleMouseUp(item.pos)} onMouseEnter={()=>handleMouseEnter(item.pos)} style={{border:'1px solid black',alignContent:'center',textAlign:'center',userSelect:'none',backgroundColor:boundry.includes(item.pos.join('')) && 'aliceblue'}} key={index} >{item?.pos}</div>
                ))}
            </div>
        </div>
        
    )
}

export default SelectableGrid