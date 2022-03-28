import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import adminInfo from "../reducers/adminInfo";
import student from "../reducers/student";
import courses from "../reducers/courses";
import lectures from "../reducers/lectures";
const configureStore = () => {
    const store = createStore(combineReducers({
        adminInfo: adminInfo,
        student: student,
        courses: courses,
      lectures: lectures
    }), applyMiddleware(thunk))
    return store
}
export default configureStore