import axios from "axios";
export const startCreateCourse=(formData,handleClick,swal)=>
{
return (dispatch)=>
{
  axios.post('https://dct-e-learning.herokuapp.com/api/courses',formData,{
    headers:{
'Authorization':localStorage.getItem('token')
    }
})
.then((response)=>
{
    const result=response.data
    //console.log(result)
    if(result.hasOwnProperty('errors'))
    {
swal(result.message)
    }
    else 
 {
    //console.log(result)
    swal("Sucessfully created course")
    dispatch(courseData(result))
    handleClick()
    //navigate("/login")   
}
})
.catch((err)=>
{
    swal(err.msg)
})
}
} 
export const courseData=(result)=> {
    return{
        type:'Create_Course',
        payload:result
    }
} 