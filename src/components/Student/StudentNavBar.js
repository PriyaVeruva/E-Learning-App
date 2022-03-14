import React from "react";
import { useDispatch } from "react-redux";
import{Link,Route,withRouter} from "react-router-dom"
import StudentAccount from "./StudentAccount";
import { clearData } from "../../actions/allStudentDetails";
import AddLectures from "../../Lectures/AddLectures";
import GetCourseInfo from "../Courses/GetCourseInfo";
import AllCourses from "../Courses/AllCourses";
const StudentNavBar=(props)=>
{
    const{userLoggedIn,handleAuth}=props
    const dispatch=useDispatch()
    return (
<div>
{userLoggedIn&&localStorage.getItem('role')==="student"&&
      <div>
        {/* <Link to="/studentaccount">My Profile</Link>|
        <Link to="/allcourses">Courses</Link>| */}
        <Link to="/logout" onClick={() => {
                        //removing token from local storage
                        localStorage.removeItem('token')
                        alert("Student Successfully Logged Out")
                       dispatch(clearData())
                        handleAuth()
                        props.history.push("/")
                    }}>Logout</Link>
{/*                   
        <Route path="/studentaccount" component={StudentAccount}/>
        <Route path="/allcourses" component={AllCourses}/>
        <Route path="/courses/:id" component={AddLectures}/>
        <Route path="/coursesInfo/:id" component={GetCourseInfo}/> */}
</div>
}

</div>
 )
}
    export default withRouter(StudentNavBar)
