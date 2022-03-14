import axios from 'axios'
export const startCreateLectures=(formData,id)=>
{
    return (dispatch)=>
    {
        axios.post(`https://dct-e-learning.herokuapp.com/api/courses/${id}/lectures`,formData,{
            headers:{
                "Authorization":localStorage.getItem('token')
            }
        })
        .then((response)=>
        {
            const result=response.data
            console.log(result)
            if(result.hasOwnProperty('errors'))
    {
alert(result.message)
    }
    else 
 {
    console.log(result)
    alert("Sucessfully created Lectures")
    dispatch(lecturesData(result))
    //navigate("/login")   
}
})
    
        .catch((err)=>
        {
            alert(err.msg)
        })
    }
}
export const lecturesData=((result)=>
{
    return{
        type:"Add_Lectures",
        payload:result
    }
})


//get all lectures

export const startGetAllLectures=(id)=>
{
    return (dispatch)=>
    {
        axios.get(`https://dct-e-learning.herokuapp.com/api/courses/${id}/lectures`,{
            headers:{
                "Authorization":localStorage.getItem('token')
            }
        })
        .then((response)=>
        {
            const result=response.data
           console.log(result)
           dispatch(allLecturesData(result))
})
    
        .catch((err)=>
        {
            alert(err.msg)
        })
    }
}
export const allLecturesData=((result)=>
{
    return{
        type:"All_Lectures",
        payload:result
    }
})

//get individual lectures

export const startShowLectureInfo=(cid,lid)=>
{
    return (dispatch)=>
    {
        axios.get(`https://dct-e-learning.herokuapp.com/api/courses/${lid}/lectures/${cid}`,{
            headers:{
                "Authorization":localStorage.getItem('token')
            }
        })
        .then((response)=>
        {
            const result=response.data
           // console.log(result)
            dispatch(getLectureInfo(result))
        })
        .catch((err)=>
        {
           // alert(err.msg)
           console.log(err.msg)
        })
    }
}
export const getLectureInfo=((result)=>
{
    return{
        type:"Get_LectureData",
        payload:result
    }
})

//delete lecture

export const startDeleteLecture=(cid,lid)=>
{
    return (dispatch)=>
    {
        axios.delete(`https://dct-e-learning.herokuapp.com/api/courses/${lid}/lectures/${cid}`,{
            headers:{
                "Authorization":localStorage.getItem('token')
            }
        })
        .then((response)=>
        {
            const result=response.data
            console.log(result,'data')
           alert(`Successfully ${result.title} has been removed`)
            dispatch(deleteLectureInfo(result))
        })
        .catch((err)=>
        {
           alert(err.msg)
           //console.log(err.msg)
        })
    }
}
export const deleteLectureInfo=((result)=>
{
    return{
        type:"Delete_Lecture",
        payload:result._id
    }
})



