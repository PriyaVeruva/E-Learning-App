import axios from "axios";
export const startRegisterStudent = (formData, handleClick, swal) => {
    return ((dispatch) => {
        axios.post('https://dct-e-learning.herokuapp.com/api/admin/students', formData, {
            headers:
            {
                "Authorization": localStorage.getItem('token')
            }
        })
            .then((response) => {
                const result = response.data
                // console.log(result, 'created student data')
                if (result.hasOwnProperty('message')) {
                    swal(result.message)
                }
                else if (result.hasOwnProperty('errors')) {
                    swal(result.errors)
                }
                else {
                    swal(`Successfully student ${result.name} registration has done`)
                    dispatch(registerStudent(result))
                    handleClick()
                }
            })
            .catch((err) => {
                swal(err)
            })
    })
}
export const registerStudent = (result) => {
    return {
        type: "Add_Student",
        payload: result
    }
}
//get individual student data
export const startStudentProfile = (id, swal) => {
    return (dispatch) => {
        axios.get(`https://dct-e-learning.herokuapp.com/api/students/${id}`, {
            headers: {
                'Authorization': localStorage.getItem('token')
            }
        })
            .then((response) => {
                const result = response.data
                //console.log('studentProfile', result)
                dispatch(studentAccount(result))
            })
            .catch((err) => {
                swal(err.msg)
            })
    }
}
export const studentAccount = (result) => {
    return {
        type: "Student_Details",
        payload: result
    }
}
//get all students data
export const startStudentDetails = (swal) => {
    return (dispatch) => {
        axios.get('https://dct-e-learning.herokuapp.com/api/admin/students', {
            headers: {
                'Authorization': localStorage.getItem('token')
            }
        })
            .then((response) => {
                const result = response.data
                // console.log('allstudent details', result)
                dispatch(studentDetails(result))
            })
            .catch((err) => {
                swal(err.msg)
            })
    }
}
export const studentDetails = (result) => {
    return {
        type: "All_Students",
        payload: result
    }
}
//delete student
export const startDeleteStudent = (_id, swal) => {
    const confirmWindow = window.confirm('Are u sure ??')
    if (confirmWindow) {
        return (dispatch) => {
            axios.delete(`https://dct-e-learning.herokuapp.com/api/admin/students/${_id}`, {
                headers: {
                    'Authorization': localStorage.getItem('token')
                }
            })
                .then((response) => {
                    const result = response.data
                    // console.log('deleteStudent', result)
                    if (Object.keys(result).includes('errors')) {
                        swal(result.errors)
                    } else {

                        swal(`Successfully ${result.name} has deleted`)
                        dispatch(deleteStudent(result))
                    }
                })
                .catch((err) => {
                    swal(err.msg)
                })
        }
    }
}
export const deleteStudent = (result) => {
    return {
        type: "Delete_Student",
        payload: result._id
    }
}
//for student edit
export const startUpdatedStudent = (formData, id, handleToggle, navigate, swal) => {
    return (dispatch) => {
        axios.put(`https://dct-e-learning.herokuapp.com/api/students/${id}`, formData, {
            headers: {
                "Authorization": localStorage.getItem('token')
            }
        })
            .then((response) => {
                const result = response.data
                // console.log(result, "updated student data")
                dispatch(updatedStudent(result))
                swal("Data has been updated successfully")
                handleToggle()
                navigate("/allstudents")
            })
            .catch((err) => {
                swal(err.message)
                console.log(err.msg)
            })
    }
}
export const updatedStudent = (result) => {
    return {
        type: "Edit_Student",
        payload: result._id,
        pay: result

    }
}
export const clearData = () => {
    return {
        type: "CLEAR_STORE"
    }
}
