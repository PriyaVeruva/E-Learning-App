const adminAccount={}
const adminInfo=(state=adminAccount,action)=>
{
    switch(action.type){
        case "Admin_Account":
            {
                return {...action.payload}
            }
            case "Updated_Admin":
    {
        return {...action.payload}
    }
            case "CLEAR_STORE":
                {
                    return {}
                }
            default:{
                return {...state}
            }
    }
}
export  default adminInfo