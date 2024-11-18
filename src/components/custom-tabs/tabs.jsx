import React, { useEffect, useState,useRef } from "react";

function Tabs({ children }) {

    const [tabName, setTabName] = useState({});
    const [activeTab, setActiveTab] = useState(0);
    
    const tabRef=useRef([]);


    useEffect(() => {
        const tabKeyValuePair = {};
        children.forEach((item) => {
            if (React.isValidElement(item)) {
                const { props } = item;
                tabKeyValuePair[props.title] = props.children
            }

        });

        setTimeout(()=>{
            tabRef.current[0].focus();
        },100)

     
        setTabName(tabKeyValuePair)
    }, [children])

    console.log(children)
    console.log('tabName', tabName)


    return (
        <div style={{display:'flex',flexDirection:'column',gap:40}}>
            <div style={{ display: 'flex', gap: '10px' }} className="tabs" aria-describedby="tabs name" aria-label="tabs" role="tablist">
                {Object.keys(tabName)?.map((item, index) => (
                    <button ref={(el)=>(tabRef.current[index]=el)} className={activeTab === index ? 'active' : ''} onClick={() => setActiveTab(index)} key={index}>{item}</button>
                ))}
            </div>

            <div>
                {tabName[Object.keys(tabName)[activeTab]]}
            </div>



        </div>
    )
}

export default Tabs;