import React,{useState,useRef}  from "react";
import Data from "../data.json";
export default function Table(){
    const [data,setData]=useState(Data);
    const [editState,setEditState]=useState(-1)
    return(
        <div className="tableWrap">
            <div>
            <AddMember setData={setData}/>
            <form onSubmit={handleUpdate}>
            <table>
                <thead>
                    <tr>
                    <th>StudentName</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Action</th>
                    
                    </tr>
                </thead>
                {
                    data.map((current)=>(
                       editState === current.id ? <EditMember  current={current} data={data} setData={setData}/> :

                                <tr>
                                    <td>{current.studentname}</td>
                                    <td>{current.email}</td>
                                    
                                    <td>{current.phone}</td>
                                   
                                    <td><button type="button" onClick={()=>handleEdit(current.id)}>Edit</button>
                                    <button type="button"onClick={()=>handleDelete(current.id)}>Delete</button>
                                    </td>
                                    
                                </tr>
                    
                    ))
                }
            </table>
            </form>
            </div>
        </div>
    )
    function handleUpdate(event){
        event.preventDefault()
       const studentname=event.target.elements.studentname.value 
       const email=event.target.elements.email.value 
       const phone=event.target.elements.phone.value 

       
       const updatedData=data.map(d=>d.id ===editState ? {...d,studentname:studentname,email:email,phone:phone}:d)
           
       setEditState(-1)
       setData(updatedData) 
        
    }
    function handleEdit(id){
setEditState(id)
    }
function handleDelete(id){

 const updatedData=data.filter((d)=>id !==d.id )
 setData(updatedData)
}


}
function EditMember({current,setData,data}){
    function handleName(event){
        const studentname=event.target.value;
        const updatedData=data.map((d)=>d.id===current.id?{...d,studentname:studentname}:d)
setData(updatedData)
    }
    function handleEmail(event){
        const email=event.target.value;
        const updatedData=data.map((d)=>d.id===current.id?{...d,email:email}:d)
setData(updatedData)
    }


    function handlePhone(event){
        const phone=event.target.value;
        const updatedData=data.map((d)=>d.id===current.id?{...d,phone:phone}:d)
setData(updatedData)
    }

    



    return(
        <tr>
            
            <td><input type="text" onChange={handleName}value={current.studentname}name="studentname"placeholder="Enter name" /></td>
            <td><input type="text"onChange={handleEmail} value={current.email}name="email"placeholder="Enter email"/></td>
            <td><input type="number"onChange={handlePhone}value={current.phone} name="phone"placeholder="Enter phone"/></td>
           
            
            <td><button type="submit">update</button> </td>
            
        </tr>
    )

}
function AddMember({setData}){
    const studentnameRef=useRef()
    const emailRef=useRef()
    const phoneRef=useRef()

    function handleInput(event){
        event.preventDefault();
        const studentname=event.target.elements.studentname.value;
        const email=event.target.elements.email.value;
        const phone=event.target.elements.phone.value;
      
        const newMember={
            id:4,
            studentname,
            email,
            phone,
            
        }
        setData(prevData=>prevData.concat(newMember))
        studentnameRef.current.value=""
        emailRef.current.value=""
        phoneRef.current.value=""
      

    }
    return(
        <form className="addForm" onSubmit={handleInput}>
            <input type="text" name="studentname"placeholder="Enter name" ref={studentnameRef}/>
            <input type="text" name="email"placeholder="Enter email"ref={emailRef}/>
            <input type="number" name="phone"placeholder="Enter phone"ref={phoneRef}/>
            
            <button>AddMember</button>
        </form>
    )
}