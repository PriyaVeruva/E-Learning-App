import React, { useState } from "react";
import CourseForm from "./CourseForm";
import { useDispatch } from "react-redux";
import { startCreateCourse } from "../../actions/coursesForm";
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import {Grid,Button,Typography} from "@mui/material"
import AllCourses from './AllCourses'
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import swal from "sweetalert"
const CreateCourse = (props) => {
    const dispatch = useDispatch()
    const [toggle, setToggle] = useState(false)
    const handleClick = () => {
        setToggle(!toggle)
    }
    const formSubmission = (formData) => {
        dispatch(startCreateCourse(formData,handleClick,swal))
    }
    return (
        <div>
            {
                toggle ?
                    <div>
                       <Button onClick={handleClick} ><NavigateBeforeIcon  sx={{ fontSize: 40 }} /></Button>
                        <Typography className="container" textAlign="center" margin="1rem auto" style={{ justifycontent: "center" }} variant="h4">
                Add Course Info
            </Typography>
                        <CourseForm formSubmission={formSubmission} />
                    
                    </div>
                    :
                    <div>
                       
         
           <Grid  
           container
           direction="column"
           justify="flex-start"
           alignItems="flex-end"
           style={{height:'100px'}}
           >
               <Grid item>
               <Button onClick={handleClick} ><GroupAddIcon  sx={{ fontSize: 40 }} /></Button>
               </Grid>
           </Grid>
           <AllCourses/>
                        </div>
                        
            }
        </div>
    )
}
export default CreateCourse