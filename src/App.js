import React, { useState, useEffect } from "react"
import NavBar from "./components/Admin/NavBar"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar1 from "./components/Admin/NavBar1";
import Account from "../src/components/Admin/Account";
import AddStudents from "../src/components/Student/AddStudents"
import Update from "../src/components/Student/Update";
import CreateCourse from "../src/components/Courses/CreateCourse";
import AddLectures from "../src/components/Lectures/AddLectures";
import GetCourseInfo from "../src/components/Courses/GetCourseInfo";
import EnrollStudents from "../src/components/Student/EnrollStudents";
import UnEnrollStudents from "../src/components/Student/UnEnrollStudents";
import GetLecturesInfo from "../src/components/Lectures/GetLecturesInfo";
import StudentAccount from "./components/Student/StudentAccount";
import AllCourses from "./components/Courses/AllCourses";
import Play from "../src/components/Lectures/Play"

import EditCourse from "./components/Courses/EditCourse";
import EnrolledCourses from "./components/Student/EnrolledCourses";
const App = (props) => {
  const [userLoggedIn, setUserLoggedIn] = useState(false)
  const handleAuth = () => {
    setUserLoggedIn(!userLoggedIn)
  }
  useEffect(() => {
    if (localStorage.getItem('token')) {
      handleAuth()
    }

  }, [])

  return (
    <div className="App" >
      {!localStorage.getItem('token') ?
        <NavBar handleAuth={handleAuth} userLoggedIn={userLoggedIn} />
        :
        <>
          <Router>
            <NavBar1 handleAuth={handleAuth} userLoggedIn={userLoggedIn} />
            {localStorage.getItem('role') === "admin" &&
              <Switch>
                <Route path="/account" component={Account} exact={true} />
                <Route path="/edit/:id" component={Update} />
                <Route path="/allstudents" component={AddStudents} />
                <Route path="/allcourses" component={CreateCourse} />
                <Route path="/coursesInfo/:id" component={GetCourseInfo} exact={true} />
                <Route path="/coursesEdit/:id" component={EditCourse} />
                <Route path="/enrollStudents/:id" component={EnrollStudents} />
                <Route path="/unenrollStudents/:id" component={UnEnrollStudents} />
                <Route path="/courses/:id" component={AddLectures} exact={true} />
                <Route path="/courses/:id/getlectures/:id" component={GetLecturesInfo} />
             
                <Route path="/play/:id" component={Play} />
                
              </Switch>
            }
            {localStorage.getItem('role') === "student" &&
              <Switch>
                <Route path="/studentaccount" component={StudentAccount} />
                <Route path="/allcourses" component={AllCourses} />
                
                <Route path="/coursesInfo/:id" component={GetCourseInfo} />
               
               
                <Route path="/enrolledcourses/" component={EnrolledCourses} />
                <Route path="/courses/:id" component={AddLectures} exact={true} />
                <Route path="/courses/:id/getlectures/:id" component={GetLecturesInfo} />
                <Route path="/play/:id" component={Play} />
             
              </Switch>
            }
          </Router>
        </>
      }
    </div>
  )
}
export default App