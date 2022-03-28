import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { startCoursesList, startUpdateCourse } from "../../actions/courses";
import CourseForm from "./CourseForm"
import { Typography } from "@mui/material"
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import swal from "sweetalert"
const CourseList = (props) => {
    const { id } = props.match.params
    const [toggle, setToggle] = useState(true)
    const dispatch = useDispatch()
    const courses = useSelector((state) => {
        return state.courses
    })
    useEffect(() => {
        dispatch(startCoursesList(id))
    }, [])

    //updating course details
    const formSubmission = (formData) => {
        dispatch(startUpdateCourse(formData, id, handleToggle,props.history.push,swal))
    }
    const handleToggle = () => {
        setToggle(toggle)
    }
    return (

        <div>
            <Link to="/allcourses"><NavigateBeforeIcon sx={{ fontSize: 40 }} /></Link>
            {toggle &&
                <div>
                    {
                        courses.map(ele => {
                            return (
                                <div key={ele._id}>
                                    <CourseForm
                                        formSubmission={formSubmission}
                                        name={ele.name}
                                        description={ele.description}
                                        duration={ele.duration}
                                        releaseDate={ele.releaseDate}
                                        isDelete={ele.isDelete}
                                        category={ele.category}
                                        level={ele.level}
                                        validity={ele.validity}
                                        author={ele.author}
                                        toggle={toggle}
                                    />
                                </div>
                            )
                        })
                    }
                </div>
            }
        </div>

    )
}
export default withRouter(CourseList)