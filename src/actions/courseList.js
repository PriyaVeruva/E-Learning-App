import axios from "axios"
export const startAllCourses = (props) => {
    return (dispatch) => {
        axios.get('https://dct-e-learning.herokuapp.com/api/courses', {
            headers: {
                "Authorization": localStorage.getItem('token')
            }
        })
            .then((response) => {
                const result = response.data
                console.log(result, 'COURSEINFO')
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
export const startCoursesList = (id, navigate) => {
    return (dispatch) => {
        axios.get(`https://dct-e-learning.herokuapp.com/api/courses/${id}`, {
            headers: {
                'Authorization': localStorage.getItem('token')
            }
        })
            .then((response) => {
                const result = response.data
                console.log('coursesList', result)
                dispatch(coursesList(result))
            // setTimeout(function()
            // {
            //     navigate('/allcourses');
            // },4000)
             })
            .catch((err) => {
                alert(err.msg)
            })
    }
}
export const coursesList = (result) => {
    return {
        type: "Courses_List",
        payload: result,

    }
}
//update course details
export const startUpdateCourse = (formData, id, handleToggle) => {
    return (dispatch) => {
        axios.put(`https://dct-e-learning.herokuapp.com/api/courses/${id}`, formData, {
            headers: {
                "Authorization": localStorage.getItem('token')
            }
        })
            .then((response) => {
                const result = response.data
                console.log(result, "updated")
                dispatch(getUpdated(result))
                alert("Data has been updated successfully")
                handleToggle()
            })
            .catch((err) => {
                alert(err.msg)
            })
    }
}
export const getUpdated = ((result) => {
    return {
        type: "Updated_Course",
        payload: result
    }
})

//deleting a course
export const startDeleteCourse = (_id) => {
    return (dispatch) => {
        axios.delete(`https://dct-e-learning.herokuapp.com/api/courses/${_id}`, {
            headers: {
                'Authorization': localStorage.getItem('token')
            }
        })
            .then((response) => {
                const result = response.data
                console.log('deleteCourse', result)
                alert(`Successfully ${result.name} has deleted`)
                dispatch(deleteCourse(result))
            })
            .catch((err) => {
                alert(err.msg)
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
export const startEnrollStudents = (sid, cid) => {
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
                    alert(result.message)
                }
                else if (result.hasOwnProperty('errors')) {
                    alert(result.errors)

                }
                else if (result === "Already enrolled") {
                    alert(result)
                }
                else {
                    alert('Successfully  registration has done')

                    dispatch(enrollStudents(result))
                }
            })
            .catch((err) => {
                alert(err.msg)
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
export const startUnEnrollStudents = (sid, cid) => {
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
                    alert(result.message)
                }
                else if (result.hasOwnProperty('errors')) {
                    alert(result.errors)

                }
                else if (result === "Already Unenrolled") {
                    alert(result)
                }
                else {
                    alert('Successfully  unenrolled')

                    dispatch(unenrollStudents(result))
                }
            })
            .catch((err) => {
                alert(err.msg)
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