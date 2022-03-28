import React, { useState } from "react";
import CreateLectures from "./CreateLectures";
import { startCreateLectures } from "../../actions/addLectures";
import { useDispatch } from "react-redux"
import AllLectures from "./AllLectures";
import { Grid, Button } from "@mui/material"
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { Link } from "react-router-dom";
import swal from "sweetalert"
const AddLectures = (props) => {
    const dispatch = useDispatch()
    const { id } = props.match.params
    // console.log(id, 'id')
    const [toggle, setToggle] = useState(false)
    const handleToggle = () => {
        setToggle(!toggle)
    }
    const formSubmission = (formData) => {
        dispatch(startCreateLectures(formData, id, swal))
    }
    return (
        <div>
            <div>
                {localStorage.getItem('role') === "admin" ? <Link to="/allcourses"><NavigateBeforeIcon sx={{ fontSize: 40 }} />Back to Courses</Link> : <Link to="/enrolledcourses"><NavigateBeforeIcon sx={{ fontSize: 40 }} /></Link>}
            </div>
            {
                toggle ?
                    <div>
                        <Button onClick={handleToggle} > <KeyboardBackspaceIcon sx={{ fontSize: 40 }} />Back to Lectures</Button>
                        <CreateLectures formSubmission={formSubmission} />
                    </div>
                    :
                    <div>
                        <Grid
                            container
                            direction="column"
                            justify="flex-start"
                            alignItems="flex-end"
                            style={{ height: '100px' }}
                        >
                            {localStorage.getItem('role') === "admin" &&
                                <Grid item>
                                    <Button onClick={handleToggle} ><GroupAddIcon sx={{ fontSize: 40 }} /></Button>
                                </Grid>
                            }  </Grid>
                        <AllLectures />
                    </div>
            }
        </div>
    )
}
export default AddLectures