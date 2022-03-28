const studentsData = []
const students = (state = studentsData, action) => {
    switch (action.type) {
        case "Add_Student":
            {
                return [...state, { ...action.payload }]
            }
        case "Student_Details":
            {
                return [{ ...action.payload }]
            }

        case "All_Students":
            {
                return [...action.payload]
            }
        case "Delete_Student":
            {
                return state.filter(ele => {
                    if (ele._id !== action.payload) {
                        return {}
                    }
                })
            }
        case "Edit_Student":
            {
                return state.map(ele => {
                    if (ele._id === action.payload) {
                        return { ...action.pay, ...ele }
                    }
                    else {
                        return { ...ele }
                    }
                })
            }
        default:
            {
                return [...state]
            }
    }
}
export default students