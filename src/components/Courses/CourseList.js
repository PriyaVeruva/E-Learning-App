import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { startCoursesList, startUpdateCourse } from "../../actions/courseList";
import CourseForm from "./CourseForm"
import { Typography } from "@mui/material"

import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
const CourseList = (props) => {
    const { id } = props.match.params
    const [toggle, setToggle] = useState(false)
    // const [rel, setrel] = useState(0)
    //const [details, setDetails] = useState({})
    const dispatch = useDispatch()
    const coursesData = useSelector((state) => {
        return state.coursesData
    })
    useEffect(() => {
        dispatch(startCoursesList(id))
    }, [])

    //updating course details
    const formSubmission = (formData) => {
        dispatch(startUpdateCourse(formData, id, handleToggle))
    }
    //  useEffect(() => {
    //         if (state.coursesForm.length > 0) {
    //             const find = state.coursesForm.find(ele => ele._id === id)
    //             setDetails(find)
    //         }
    //     }, [])
    //console.log(details,'details')
    const handleToggle = () => {
        setToggle(!toggle)
    }
    return (

        <div>
            <Link to="/allcourses"><NavigateBeforeIcon sx={{ fontSize: 40 }} /></Link>
            {!toggle && <Typography className="container" textAlign="center" margin="1rem auto" style={{ justifycontent: "center" }} variant="h4">
                Update Course Info
            </Typography>}{!toggle &&
                <CourseForm
                    formSubmission={formSubmission}
                    name={coursesData.name}
                    description={coursesData.description}
                    duration={coursesData.duration}
                    releaseDate={coursesData.releaseDate}
                    isDelete={coursesData.isDelete}
                    category={coursesData.category}
                    level={coursesData.level}
                    validity={coursesData.validity}
                    author={coursesData.author}
                    toggle={toggle}
                />
            }


        </div>

    )
}
export default withRouter(CourseList)