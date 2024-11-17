import { useState, useRef, useEffect } from 'react'

let jsonData = [
    {
        id: 1,
        name: "First Name",
        placeHolder: 'First Name',
        type: "text",
        errorMsg: "Please enter your first name",
        value: "",
        isError:false
    },
    {
        id: 2,
        name: "Last Name",
        placeHolder: 'Last Name',
        type: "text",
        errorMsg: "Please enter your Last name",
        value: "",
        isError:false
    },
    {
        id: 3,
        name: "Password",
        placeHolder: 'Password',
        type: "password",
        errorMsg: "Please enter your Password",
        value: "",
        isError:false
    },
    {
        id: 4,
        name: "Correct Password",
        placeHolder: 'Correct Password',
        type: "password",
        errorMsg: "Please enter Correct Password",
        value: "",
        isError:false
    }
]
function FormWithValidation() {
    const [formData, setFormData] = useState(jsonData || []);

    const handleSubmit=(e)=>{
           e.preventDefault();
         let updatedState =  formData.map((item)=>{
               if(!item.value){
                 return {...item,isError:true}
               }
               else{
                return {...item,isError:false}
               }
           }) 
           setFormData(updatedState)

    }

    const handleInputChange=(e,index)=>{
        let newFormData=[...formData];
        newFormData[index]={...newFormData[index],value:e.target.value,isError:false};
        setFormData(newFormData)
    }

    return (<>
        <form>
            {formData?.map((item,index) => (
                <div style={{display: "flex", gap: "20px",marginBottom: "10px",flexDirection:'column',alignContent:'center',alignItems:'center'}}>
                    <label style={{fontSize:'medium',fontWeight:'bold',marginTop:'10px'}}>{item.name}  </label>
                    <input style={{width:'50%',height:'30px'}} type={item.type} placeholder={item.placeHolder} value={item.value || ""} onChange={(e) => handleInputChange(e,index)} />
                    {item.isError && <span style={{ color: "red" }}>{item.errorMsg}</span>}
                </div>
                

            ))}
            <button style={{ backgroundColor: "purple",color:'white' }} onClick={(e) => handleSubmit(e)}>Submit</button>
        </form>
    </>)
}

export default FormWithValidation
