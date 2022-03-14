const tokenInfo={}
const tokenData=(state=tokenInfo,action)=>
{
    switch(action.type)
    {
        case 'Token_Data':
            {
                return {...action.payload}
            }
            case "CLEAR_STORE":
                {
                    return {}
                }
    default:
        return {...state}
    }
}
export default tokenData