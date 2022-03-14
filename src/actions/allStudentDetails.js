import axios from "axios";
export  const startStudentDetails=(swal)=>
{
    return(dispatch)=>
    {
axios.get('https://dct-e-learning.herokuapp.com/api/admin/students',{
    headers:{
'Authorization':localStorage.getItem('token')
    }
})
.then((response)=>
{
    const result=response.data
    console.log('studentDetails',result)
    dispatch(studentDetails(result))
})
.catch((err)=>
{
    swal(err.msg)
})
    }
}
export const studentDetails=(result)=>
{
    return {
        type:"Student_Details",
        payload:result
    }
}
export const clearData=()=>
{
    return {
        type:"CLEAR_STORE"
    }
}

export  const startDeleteStudent=(_id,swal)=>
{
    return(dispatch)=>
    {
axios.delete(`https://dct-e-learning.herokuapp.com/api/admin/students/${_id}`,{
    headers:{
'Authorization':localStorage.getItem('token')
    }
})
.then((response)=>
{
    const result=response.data
    console.log('deleteStudent',result)
    swal(`Successfully ${result.name} has deleted`)
    dispatch(deleteStudent(result))
})
.catch((err)=>
{
    swal(err.msg)
})
 }
}

export const deleteStudent=(result)=>
{
    return {
        type:"Delete_Student",
        payload:result._id
    }
}
//for student edit
export const startUpadtedStudent=(formData,id,handleToggle,navigate,swal)=>
{
return (dispatch)=>
{
axios.put(`https://dct-e-learning.herokuapp.com/api/students/${id}`,formData,{
    headers:{
        "Authorization":localStorage.getItem('token')
    }
})
.then((response)=>
{
    const result=response.data
    console.log(result,"updatedresult")
    dispatch(updatedStudent(result))
    swal("Data has been updated successfully")
    handleToggle()
    navigate("/allstudents")
//dispatch(removeStudentInfo())

})
.catch((err)=>
{
    swal(err.message)
 console.log(err.msg)
})
}
}
export const updatedStudent=(result)=>
{
return{
    type:"Updated_Student",
    payload:result._id,
    pay:result

}
}
// export const removeStudentInfo=()=>
// {
//     return {
//         type:"Remove_Student"
//     }
// }