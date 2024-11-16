import { useState,useRef, useEffect } from 'react'

function Comments({data,level=0})
{
    let ref=useRef(null);
    console.log(data)

    const [showReplyButton,setShowReplyButton]=useState(false)
    const [inputData,setInputData]=useState('')
    const [replyData,setReplyData]=useState(data.children || []);

    const handleSave=()=>{
        setShowReplyButton(false)
        let getLastID=replyData[replyData.length-1]?.id;
        setReplyData([...replyData,{id:Number(getLastID)+1,name:inputData,children:[]}])
        setInputData('');
    }

    const handleCancel=()=>{
        setInputData('')
        setShowReplyButton(false);
    }
    function handleKeyDown(e)
    {
       if(e.key==='Enter')
       {
        handleSave()
       }
       if(e.key==='Escape')
        {
            handleCancel()
        }
    } 

    useEffect(()=>{
        if(ref.current)
        {
            ref.current.focus();

        }
    },[showReplyButton])

    return(
        <>
        <div style={{display:"flex",flex:1,alignContent:'center',margin:'10px',marginLeft:`${level*100}px`}}>
            <li>{data?.name}</li>
            <button onClick={()=>{setShowReplyButton(!showReplyButton),ref.current++}} style={{marginLeft:'10px',padding:'1px',fontSize:'small',color:'white',backgroundColor:'purple'}}>Reply</button>
        </div>

        {
            showReplyButton && 
            <div style={{display:'flex',flexDirection:'column'}}>
            <input type="text" value={inputData} ref={ref} onKeyDown={handleKeyDown} onChange={(e)=>setInputData(e.target.value)} />
            
            <div style={{display:"flex",gap:"5px", flex:1}}>          
            <button onClick={()=>handleSave()}>Save</button>  
            <button onClick={()=>handleCancel()}>Cancel</button>               
             </div>
            </div>
        }
        {
            replyData.length>0 && replyData?.map((item,index)=>(
                <Comments key={index} data={item} level={level+1}/>
            ))

            
        }


        </>
    )
}

export default Comments;