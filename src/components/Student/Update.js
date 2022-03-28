import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"
import { startUpdatedStudent } from "../../actions/students";
import { startStudentProfile } from "../../actions/students";
import StudentForm from "./StudentForm";
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { Typography } from "@mui/material";
import swal from 'sweetalert'
const Update = (props) => {
    const { id } = props.match.params
    const [toggle, setToggle] = useState(true)
    const dispatch = useDispatch()
    const student = useSelector((state) => {
        return state.student
    })
    useEffect(() => {
        dispatch(startStudentProfile(id, swal))
    }, [])
    const handleToggle = () => {
        setToggle(!toggle)
    }
    const formSubmission = (formData) => {
        dispatch(startUpdatedStudent(formData, id, handleToggle, props.history.push, swal))
    }
    return (
        <div>

            <Link to="/allstudents"><NavigateBeforeIcon sx={{ fontSize: 40 }} /></Link>
            {
                toggle && <Typography className="container" textAlign="center" margin="1rem auto" style={{ justifycontent: "center" }} variant="h4">
                    Update Student Details
                </Typography>
            }
            {
                toggle &&
                <div>
                    {
                        student.map(ele => {
                            return (
                                <div key={ele._id}>
                                    <StudentForm
                                        formSubmission={formSubmission}
                                        name={ele.name}
                                        email={ele.email}
                                        toggle={toggle} />
                                </div>
                            )
                        })
                    }
                </div>

            }
        </div>
    )
}
export default withRouter(Update)