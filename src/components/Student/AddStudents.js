import React, { useState } from "react";
import { useDispatch } from "react-redux";
import StudentForm from "../Student/StudentForm";
import { startRegisterStudent } from "../../actions/students";
import StudentTable from "./StudentTable";
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import { Typography, Button, Grid } from "@mui/material";
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import swal from 'sweetalert'
const AddStudents = (props) => {
    const dispatch = useDispatch()
    const [change, setChange] = useState(false)
    const formSubmission = (formData) => {
        dispatch(startRegisterStudent(formData, handleClick, swal))
    }
    const handleClick = () => {
        const result = !change
        setChange(result)
    }
    return (
        <div>
            {
                change ?
                    <div>
                        <Button onClick={handleClick} ><NavigateBeforeIcon sx={{ fontSize: 40 }} /></Button>
                        <Typography className="container" textAlign="center" margin="1rem auto" style={{ justifycontent: "center" }} variant="h4">
                            Add Student
                        </Typography>
                        <StudentForm formSubmission={formSubmission} />
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
                            <Grid item>
                                <Button onClick={handleClick} ><GroupAddIcon sx={{ fontSize: 40 }} /></Button>
                            </Grid>
                        </Grid>
                        <StudentTable />
                    </div>
            }

        </div>
    )
}
export default AddStudents