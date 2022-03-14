import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"
import { startUpadtedStudent } from "../../actions/allStudentDetails";
import StudentForm from "./StudentForm";
import EditIcon from '@mui/icons-material/Edit';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { Button } from "@mui/material";
import swal from 'sweetalert'
const Update = (props) => {
    const { id } = props.match.params
   const [details, setDetails] = useState({})
   const[toggle,setToggle]=useState(false)
    const dispatch = useDispatch()
    const state = useSelector((state) => {
        return state
    })

    useEffect(() => {
        if (state.studentRegister.length > 0) {
            const find = state.studentRegister.find(ele => ele._id === id)
            setDetails(find)
        }
    }, [])
//console.log(details,"details")


const handleToggle=()=>
{
    setToggle(!toggle)
}

//     //PUT REQUEST 
    const formSubmission=(formData)=>
    {
        dispatch(startUpadtedStudent(formData,id,handleToggle,props.history.push,swal))
    }

    return (
        <div>
        {toggle?
            <div>
                    <Button onClick={handleToggle} ><NavigateBeforeIcon  sx={{ fontSize: 40 }} /></Button>
        <StudentForm formSubmission={formSubmission} name={details.name} email={details.email} toggle={toggle}/>
    
        </div>
        :
        <div>
             <Button  onClick={handleToggle} variant="contained" color="secondary" float ='left'><EditIcon/></Button>
            </div>
        }
        </div>
    )

    }
export default withRouter(Update)