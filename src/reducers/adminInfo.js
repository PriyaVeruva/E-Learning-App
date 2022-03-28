const adminAccount = {}
const adminInfo = (state = adminAccount, action) => {
    switch (action.type) {
        case 'Form_Data':
            {
                return { ...action.payload }
            }
        case "Admin_Account":
            {
                return { ...action.payload }
            }
        case 'Token_Data':
            {
                return { ...action.payload }
            }
        case "Updated_Admin":
            {
                return { ...action.payload }
            }
        case "CLEAR_STORE":
            {
                return {}
            }
        default: {
            return { ...state }
        }
    }
}
export default adminInfo