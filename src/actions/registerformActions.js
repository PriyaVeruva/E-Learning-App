import axios from 'axios'
export const  startFormData=(formData,navigate)=>
{
    return(dispatch)=>
    {
axios.post('https://dct-e-learning.herokuapp.com/api/admin/register',formData)
.then((response)=>
{
    const result=response.data
    if(result.hasOwnProperty('errors'))
    {
alert(result.errors)
    }
    else 
 {
    console.log(result)
    dispatch(getformData(result))
    navigate("/login")   
}
})
.catch((err)=>
{
    alert(err.msg)
})
}
} 
    
export const getformData=(result)=> {
        return{
            type:'Form_Data',
            payload:result
        }
    } 
    export const clearData=()=>
    {
        return {
            type:"CLEAR_STORE"
        }
    }