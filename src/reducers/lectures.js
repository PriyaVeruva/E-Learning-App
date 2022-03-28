const getLectures = []
const lectures = (state = getLectures, action) => {
    switch (action.type) {
        case "Add_Lectures":
            {
                return [...state, { ...action.payload }]
            }
        case "All_Lectures":
            {
                return [...action.payload]
            }
        case "Get_LectureData":
            {
                return [{ ...action.payload }]
            }
        case "Updated_Lecture":
            {
                return state.map(ele => {
                    if (ele._id === action.payload) {
                        return { ...ele, ...action.pay }
                    }
                    else {
                        return { ...ele }
                    }
                })
            }

        case "Delete_Lecture":
            {
                return state.filter(ele => {
                    if (ele._id !== action.payload) {
                        return {}
                    }

                })

            }
        default: {
            return [...state]
        }
    }
}
export default lectures