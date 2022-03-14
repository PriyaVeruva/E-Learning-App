import React, { useState,useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { startAdminAccount } from "../actions/adminAccount";
import { startUpdatedAdmin } from "../actions/updatedAdmin";
import FormData from "./FormData";
const Account = (props) => {
    const[toggle,setToggle]=useState(false)
    const dispatch = useDispatch()
    //to read the state information which is present inside store we use in this way 
    //now i can get information about admin details
    const adminInfo = useSelector((state) => {
        return state.adminInfo
    })
    //toupdate my stateinfo after editing so declare a function 
//     const editItem=(formData)=>
//     {
// return {...formData}
//     }


    //to get the account details from the server 
    //why only useeffect here bcz api calls can take in use effect 
    //and inside use effect we are dispatching the api call to get the  account information from server  
    useEffect(() => {
        dispatch(startAdminAccount())
    }, [])
    //we make the toggle functionality inside function so that we can reuse that function 
    const handleToggle=()=>
    {
    const result=!toggle
    setToggle(result)
    }
    //where we are making api calls consider it is parent  and formdata is children 
    //we need to send the formdata to server so to communicate child to parent declare a
    //call back function and invoke that function and while invoking via arguments 
    //pass the formdata
const formSubmission=(formData)=>
{
dispatch(startUpdatedAdmin(formData,editItem,handleToggle))
//after updation i need to remove the form and show the updated text so we make use of toggle function 
}
    
    return (
        <div>
        {
            //here i am setting a toggle i.e when user clicks on edit button then i need to show form data 
            //intially toggle is false that means only Account details is shown 
            //and also cancel button in form bcz if user dont want to edit nothing then he goes back to cancel their toggle is applying 
            toggle?
            <div>
            <h1>Update Details</h1>
            <FormData {...adminInfo}  toggle={toggle} formSubmission={formSubmission}/>
            <button onClick={handleToggle}>cancel</button>
            </div>
            :
        <div>
            <h1>Admin Details</h1>
            <p>Email-{adminInfo.email}</p>
            <p>UserName-{adminInfo.username}</p>
            <p>Academy Name-{adminInfo.academy && adminInfo.academy.name}</p>
    <p>Academy Website-{adminInfo.academy && adminInfo.academy.website}</p>
    <button onClick={handleToggle}>Edit</button>
    </div>
        }



        
        </div>
    )
}
export default Account