import axios from "axios";
export const startCreateCourse = (formData, handleClick, swal) => {
    return (dispatch) => {
        axios.post('https://dct-e-learning.herokuapp.com/api/courses', formData, {
            headers: {
                'Authorization': localStorage.getItem('token')
            }
        })
            .then((response) => {
                const result = response.data

                if (result.hasOwnProperty('errors')) {
                    swal(result.message)
                }
                else {
                    swal("Sucessfully created course")
                    dispatch(courseData(result))
                    handleClick()

                }
            })
            .catch((err) => {
                swal(err.msg)
            })
    }
}
export const courseData = (result) => {
    return {
        type: 'Add_Course',
        payload: result
    }
}
export const startAllCourses = (props) => {
    return (dispatch) => {
        axios.get('https://dct-e-learning.herokuapp.com/api/courses', {
            headers: {
                "Authorization": localStorage.getItem('token')
            }
        })
            .then((response) => {
                const result = response.data
                // console.log(result, 'COURSEINFO')
                dispatch(getAllCourses(result))
            })
            .catch((err) => {
                alert(err.msg)
            })
    }
}
export const getAllCourses = (result) => {
    return {
        type: 'All_Courses',
        payload: result
    }
}


//get individual course
export const startCoursesList = (id) => {
    return (dispatch) => {
        axios.get(`https://dct-e-learning.herokuapp.com/api/courses/${id}`, {
            headers: {
                'Authorization': localStorage.getItem('token')
            }
        })
            .then((response) => {
                const result = response.data
                // console.log('coursesList', result)
                dispatch(coursesList(result))
            })
            .catch((err) => {
                alert(err.msg)
            })
    }
}
export const coursesList = (result) => {
    return {
        type: "Course_Details",
        payload: result,

    }
}
//update course details
export const startUpdateCourse = (formData, id, handleToggle, navigate, swal) => {
    return (dispatch) => {
        axios.put(`https://dct-e-learning.herokuapp.com/api/courses/${id}`, formData, {
            headers: {
                "Authorization": localStorage.getItem('token')
            }
        })
            .then((response) => {
                const result = response.data
                // console.log(result, "updated")
                dispatch(getUpdated(result))
                swal("Data has been updated successfully")
                handleToggle()
                navigate("/allcourses")
            })
            .catch((err) => {
                swal(err.msg)
            })
    }
}
export const getUpdated = ((result) => {
    return {
        type: "Edit_Course",
        payload: result._id,
        pay: result
    }
})

//deleting a course
export const startDeleteCourse = (_id,swal) => {
    return (dispatch) => {
        axios.delete(`https://dct-e-learning.herokuapp.com/api/courses/${_id}`, {
            headers: {
                'Authorization': localStorage.getItem('token')
            }
        })
            .then((response) => {
                const result = response.data
                console.log('deleteCourse', result)
                swal(`Successfully ${result.name} has deleted`)
                dispatch(deleteCourse(result))
            })
            .catch((err) => {
                swal(err.msg)
            })
    }
}

export const deleteCourse = (result) => {
    return {
        type: "Delete_Course",
        payload: result._id
    }
}


//enroll to a course
export const startEnrollStudents = (sid, cid, navigate, swal) => {
    console.log(sid, cid)
    return (dispatch) => {
        const url = `https://dct-e-learning.herokuapp.com/api/courses/enroll?courseId=${cid}&studentId=${sid}`
        axios.patch(url, '', {
            headers: {
                "Authorization": localStorage.getItem('token')
            }
        })
            .then((response) => {
                const result = response.data
                console.log(result.students, 'enroll')
                if (result.hasOwnProperty('message')) {
                    swal(result.message)
                }
                else if (result.hasOwnProperty('errors')) {
                    swal(result.errors)

                }
                else if (result === "Already enrolled") {
                    swal(result)
                }
                else {
                    swal('Successfully Enrolled ')

                    dispatch(enrollStudents(result))
                    navigate("/allcourses")
                }
            })
            .catch((err) => {
                swal(err.msg)
                console.log(err.msg)
            })
    }
}

export const enrollStudents = (result) => {
    return {
        type: "Enroll_Students",
        payload: result.students.map(ele => ele._id)
    }
}

//unenroll to course
export const startUnEnrollStudents = (sid, cid, navigate, swal) => {
    // console.log(sid, cid)
    return (dispatch) => {
        const url = `https://dct-e-learning.herokuapp.com/api/courses/unenroll?courseId=${cid}&studentId=${sid}`
        axios.patch(url, '', {
            headers: {
                "Authorization": localStorage.getItem('token')
            }
        })
            .then((response) => {
                const result = response.data
                console.log(result, 'unenroll')
                if (result.hasOwnProperty('message')) {
                    swal(result.message)
                }
                else if (result.hasOwnProperty('errors')) {
                    swal(result.errors)

                }
                else if (result === "Already Unenrolled") {
                    swal(result)
                }
                else {
                    swal('Successfully  unenrolled')

                    dispatch(unenrollStudents(result))
                    navigate("/allcourses")
                }
            })
            .catch((err) => {
                swal(err.msg)
                console.log(err.msg)
            })
    }
}
export const unenrollStudents = (result) => {
    // console.log(result.students.map(ele=>ele._id),'result')
    return {
        type: "UnEnroll_Students",
        payload: result._id
    }

}
//enrolled courses

export const startEnrolledCourses = (props) => {
    return (dispatch) => {
        axios.get('https://dct-e-learning.herokuapp.com/api/courses/enrolled', {
            headers: {
                "Authorization": localStorage.getItem('token')
            }
        })
            .then((response) => {
                const result = response.data
                console.log(result, 'enrolledCourses')
                dispatch(enrolledCourses(result))
            })
            .catch((err) => {
                alert(err.msg)
            })
    }

}
export const enrolledCourses = (result) => {
    return {
        type: 'Enrolled_Courses',
        payload: result
    }
}