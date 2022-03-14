import axios from "axios";
export  const startAdminAccount=()=>
{
    return(dispatch)=>
    {
axios.get('https://dct-e-learning.herokuapp.com/api/admin/account',{
    headers:{
'Authorization':localStorage.getItem('token')
    }
})
.then((response)=>
{
    const result=response.data
    console.log('adminaccount',result)
    dispatch(adminDetails(result))
})
.catch((err)=>
{
    alert(err.msg)
})
    }
}
export const adminDetails=(result)=>
{
    return {
        type:"Admin_Account",
        payload:result
    }
}
export const clearData=()=>
{
    return {
        type:"CLEAR_STORE"
    }
}
//for admin edit 
export const startUpdatedAdmin=(formData,handleToggle)=>
{
return (dispatch)=>
{
axios.put('https://dct-e-learning.herokuapp.com/api/admin',formData,{
    headers:{
        "Authorization":localStorage.getItem('token')
    }
})
.then((response)=>
{
    const result=response.data
    console.log(result)
    dispatch(updatedAdmin(result))
    handleToggle()
})
.catch((err)=>
{
    alert(err.message)
 console.log(err.msg)
})
}
}
export const updatedAdmin=(result)=>
{
return{
    type:"Updated_Admin",
    payload:result
}
}