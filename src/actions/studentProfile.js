// import axios from "axios"
// export  const startStudentProfile=(id,swal)=>
// {
//     return(dispatch)=>
//     {
// axios.get(`https://dct-e-learning.herokuapp.com/api/students/${id}`,{
//     headers:{
// 'Authorization':localStorage.getItem('token')
//     }
// })
// .then((response)=>
// {
//     const result=response.data
//     console.log('studentProfile',result)
//     dispatch(studentAccount(result))
// })
// .catch((err)=>
// {
//     swal(err.msg)
// })
//     }
// }
// export const studentAccount=(result)=>
// {
//     return {
//         type:"Student_Profile",
//         payload:result
//     }
// }