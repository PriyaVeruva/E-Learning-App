const coursesData=[]
const courses=(state=coursesData,action)=>
{
    switch(action.type)
    {
    case "Add_Course":
    {
        return [...state,{...action.payload}]
    }
    case "All_Courses":
    {
        return [...action.payload]
    }
    case "Course_Details":
        {
            return [ {...action.payload} ]
        }
    case "Enroll_Students":
        {
const res=state.filter(ele=>ele._id!==action.payload)
console.log(res,'res')
return res
        }

       
        case "UnEnroll_Students":
            {
      return state.filter(ele=>
        {
            if(ele._id!==action.payload)
            {
                return {}
            }
        })
    
            }
    case "Edit_Course":
        {
            return state.map(ele=>
                {
                    if(ele._id===action.payload)
                    {
                        return {...ele,...action.pay}
                    }
                    else{
                        return {...ele}
                    }
                })
        }
    case "Delete_Course":
        {
            return state.filter(ele=>
                    {
                        if(ele._id!==action.payload)
                        {
                            return {}
                        }
                    })
            
        }
        case "Enrolled_Courses":
            {
                return [...action.payload]
            }
    
    default:{
        return[...state]
    }
}
}
export default courses