import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { startStudentProfile } from "../../actions/students";
import swal from 'sweetalert'
import { makeStyles } from '@mui/styles'
const useStyles = makeStyles(theme => ({
    root: {
        width: '75vw',
        height: "150vh",
        paddingTop: '50px'
    },
    typography: {
        fontSize: 15
    },
    text: {
        "marginTop": "70px",
        "textAlign": "center"
    }
}))
const StudentAccount = (props) => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const student = useSelector((state) => {
        return state.student
    })
    useEffect(() => {
        dispatch(startStudentProfile(localStorage.getItem('token')), swal)
    }, [])
    return (
        <div className={`${classes.text} ${classes.typography}`}>
            {
                student.map(ele => {
                    return (
                        <div key={ele._id}>
                            <h1 style={{ color: "blueviolet" }}>My Profile</h1>
                            <p>Name-{ele.name}</p>
                            <p>Email-{ele.email}</p>
                            <p>Total Courses Enrolled -{ele.courses.length}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default StudentAccount