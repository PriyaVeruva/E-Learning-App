import React, { useState, useEffect } from "react"
import NavBar from "./components/Admin/NavBar"
//import StudentNavBar from "./components/Student/StudentNavBar"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar1 from "./components/Admin/NavBar1";
import Account from "../src/components/Admin/Account";
import AddStudents from "../src/components/Student/AddStudents"
import Update from "../src/components/Student/Update";
import CreateCourse from "../src/components/Courses/CreateCourse";
import CourseList from "../src/components/Courses/CourseList";
import AddLectures from "../src/Lectures/AddLectures";
import GetCourseInfo from "../src/components/Courses/GetCourseInfo";
import EnrollStudents from "../src/components//Student/EnrollStudents";
import UnEnrollStudents from "../src/components/Student/UnEnrollStudents";
import GetLecturesInfo from "../src/Lectures/GetLecturesInfo";
import Logout from "./components/Admin/Logout";
const App = (props) => {
  const [userLoggedIn, setUserLoggedIn] = useState(false)

  const handleAuth = () => {
    setUserLoggedIn(!userLoggedIn)
  }

  //by dng this useeffect functionality after reloadation also it shows the current page where we are at previously 
  useEffect(() => {
    if (localStorage.getItem('token')) {
      handleAuth()
    }

  }, [])

  //login is children of navbar and navbar is children of app so tocommunicate child to parent declare a call back function inside parent   and pass it via props to nav bar later nav bar will pass it via props to login component using render prop inside route component
  return (
    <div className="App" >
      {!localStorage.getItem('token')?
        <NavBar handleAuth={handleAuth} userLoggedIn={userLoggedIn} />
        :
        <>
          <Router>
            <NavBar1  handleAuth={handleAuth}/>
            <Switch>


              <Route path="/account" component={Account} exact={true} />
              <Route path="/edit/:id" component={Update} />

              <Route path="/allstudents" component={AddStudents} />
              <Route path="/allcourses" component={CreateCourse} />
              
              <Route path="/coursesInfo/:id" component={GetCourseInfo} />
              <Route path="/coursesEdit/:id" component={CourseList} />
              <Route path="/enrollStudents/:id" component={EnrollStudents} />
              <Route path="/unenrollStudents/:id" component={UnEnrollStudents} />
              <Route path="/courses/:id" component={AddLectures} />
              <Route path="/getlectures/" component={GetLecturesInfo}/>
              <Route path="/logout" component={Logout}/>
            

            </Switch>
          </Router>
        </>

      }
    </div>
  )
}
export default App