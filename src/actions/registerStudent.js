import axios from "axios";
export const startRegisterStudent = (formData,handleClick,swal) => {
    return ((dispatch) => {
        axios.post('https://dct-e-learning.herokuapp.com/api/admin/students', formData, {
            headers:
            {
                "Authorization": localStorage.getItem('token')
            }
        })
            .then((response) => {
                const result = response.data
                console.log(result,'data')
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