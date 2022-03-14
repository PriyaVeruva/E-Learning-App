const courses=[]
const coursesForm=(state=courses,action)=>
{
    switch(action.type)
    {
    case "Create_Course":
    {
        return [...state,{...action.payload}]
    }
    case "All_Courses":
    {
        return [...action.payload]
    }
    case "Courses_List":
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

    // case "Updated_Course":
    //     {
    //         return state.map(ele=>
    //             {
    //                 if(ele._id===action.payload)
    //                 {
    //                     return {...ele,...action.pay}
    //                 }
    //                 else{
    //                     return {...ele}
    //                 }
    //             })
    //     }
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
    
    default:{
        return[...state]
    }
}
}
export default coursesForm