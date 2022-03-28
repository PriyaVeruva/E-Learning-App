import axios from 'axios'
export const startTokenData = (formData, handleAuth, swal) => {
    return (dispatch) => {
        axios.post('https://dct-e-learning.herokuapp.com/api/admin/login', formData)
            .then((response) => {
                const result = response.data
                if (result.hasOwnProperty('errors')) {
                    swal(result.errors)
                }
                else {
                    console.log(result)
                    swal("Admin Successfully LoggedIn");
                    localStorage.setItem('token', result.token)
                    dispatch(gettokenData(result))
                    handleAuth()
                }
            })
            .catch((err) => {
                swal(err.msg)
            })
    }
}

export const gettokenData = (result) => {
    return {
        type: 'Token_Data',
        payload: result
    }
}
export const clearData = () => {
    return {
        type: "CLEAR_STORE"
    }
}


//student login
export const startStudentTokenData = (formData, handleAuth, swal) => {
    return (dispatch) => {
        axios.post('https://dct-e-learning.herokuapp.com/api/students/login', formData)
            .then((response) => {
                const result = response.data
                if (result.hasOwnProperty('errors')) {
                    swal(result.errors)
                }
                else {
                    console.log(result)
                    swal("Student Successfully LoggedIn")
                    localStorage.setItem('token', result.token)
                    dispatch(getStudentTokenData(result))
                    handleAuth()
                }
            })
            .catch((err) => {
                swal(err.msg)
            })
    }
}

export const getStudentTokenData = (result) => {
    return {
        type: 'Token_Data',
        payload: result
    }
}

