const students=[]
const studentRegister=(state=students,action)=>
{
switch(action.type)
{
    case "Add_Student":
        {
            return [...state,{...action.payload}]
        }
        case "Student_Profile":
            {
                return [ {...action.payload} ]
            }

        case "Student_Details":
            {
                return [...action.payload]
            }
            case "Delete_Student":
            {
                return state.filter(ele=>
                        {
                            if(ele._id!==action.payload)
                            {
                                return {}
                            }
                        })
                
            }
            case "Updated_Student":
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
            
        default:
            {
                return [...state]
            }
}
}
export default studentRegister