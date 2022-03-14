const course = {}
const coursesData = (state = course, action) => {
    switch (action.type) {
        case "Courses_List":
            {
                return { ...action.payload }
            }
            case "Updated_Course":
                {
                    return {...action.payload}
                }
                

        default: {
            return {...state }
        }
    }
}
export default coursesData