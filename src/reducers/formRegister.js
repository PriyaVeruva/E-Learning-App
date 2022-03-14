const formInfo = {}
const formRegister = (state = formInfo, action) => {
    switch (action.type) {
        case 'Form_Data':
            {
                return { ...action.payload }
            }
        case "CLEAR_STORE":
            {
                return {}
            }
        default:
            return { ...state }
    }
}
export default formRegister