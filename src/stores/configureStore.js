import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import formRegister from "../reducers/formRegister";
import tokenData from "../reducers/tokenData"
import adminInfo from "../reducers/adminInfo";
import studentRegister from "../reducers/studentRegister";
import  studentProfile  from "../reducers/studentProfile";
import coursesForm from "../reducers/coursesForm";
import coursesData from "../reducers/coursesData";
import lectures from "../reducers/lectures";
const configureStore = () => {
    const store = createStore(combineReducers({
        formData: formRegister,
        token: tokenData,
        adminInfo: adminInfo,
        studentRegister:studentRegister,
        studentProfile:studentProfile,
        coursesForm:coursesForm,
        coursesData:coursesData,
        lectures:lectures


    }), applyMiddleware(thunk))
    return store
}
export default configureStore