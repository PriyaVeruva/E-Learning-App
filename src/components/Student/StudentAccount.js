import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { startStudentProfile } from "../../actions/studentProfile";
import swal from 'sweetalert'
const StudentAccount = (props) => {
    const dispatch=useDispatch()
    const studentRegister = useSelector((state) => {
        return state.studentRegister
    })

    useEffect(()=>{
        dispatch(startStudentProfile(localStorage.getItem('token')),swal)
    },[])
  
   
    return (
        <div>
{
    studentRegister.map(ele=>
    {
        return (
            <div key={ele._id}>
<p>Name-{ele.name}</p>
          <p>Email-{ele.email}</p>
          <p>Courses-{ele.courses.length}</p>
 
                </div>
        )
    })
}
                   
        </div>
    )
}
export default StudentAccount