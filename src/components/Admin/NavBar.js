import React from "react";
import { Link, Route, withRouter, useHistory } from 'react-router-dom'
// import { useDispatch } from "react-redux";
// import { clearData } from "../../actions/registerformActions";
import Home from "../Admin/Home"
import Register from "../Admin/Register"
import Login from "../Admin/Login"
// import Account from "../Admin/Account";
// import AddStudents from "../Student/AddStudents";
// import Update from "../Student/Update";
// import CreateCourse from "../Courses/CreateCourse";
// import CourseList from "../Courses/CourseList";
// import AddLectures from "../../Lectures/AddLectures";
// import GetCourseInfo from "../Courses/GetCourseInfo";
// import EnrollStudents from "../Student/EnrollStudents";
// import UnEnrollStudents from "../Student/UnEnrollStudents";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
//import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
//import GetLecturesInfo from "../../Lectures/GetLecturesInfo";
const useStyles = makeStyles({
    text: {
        "marginTop": "70px",
        "textAlign": "center"
    }
})

const NavBar = (props) => {
   // const dispatch = useDispatch()
    //   const history=useHistory()
    const classes = useStyles()
    const toggle = false

    const { userLoggedIn, handleAuth } = props
    return (

        <div className={classes.root}>

            <Box sx={{ flexGrow: 1 }}>


                <AppBar position="static">
                    <Toolbar>



                        <LocalLibraryIcon />

                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Welcome To e-Learning
                        </Typography>
                        {/* {userLoggedIn && localStorage.getItem('role') === "admin" &&
                            <>
                                <Link color="inherit" to="/account">Account</Link>|
                                <Link color="inherit" to="/allstudents">Get All Students</Link>|
                                <Link color="inherit" to="/allcourses">Courses</Link>|
                                <Link color="inherit" to="/logout" onClick={() => {
                                    //removing token from local storage
                                    localStorage.removeItem('token')
                                    alert("Admin Successfully Logged Out")
                                    dispatch(clearData())
                                    handleAuth()
                                    props.history.push("/")
                                }}>Logout</Link>
                            </>
                        } */}
                        {!userLoggedIn &&
                            <>
                                <Link sx={{ marginLeft: "auto" }} color="inherit" to="/">Home</Link>|
                                {toggle && <Link sx={{ marginLeft: "auto" }} color="inherit" to="/register">Register</Link>}
                                <Link sx={{ marginLeft: "auto" }} color="inherit" to="/login">Login</Link>|


                            </>}


                    </Toolbar>

                </AppBar>


                {/* <Route path="/account" component={Account} exact={true} />
                <Route path="/edit/:id" component={Update} />

                <Route path="/allstudents" component={AddStudents} />
                <Route path="/allcourses" component={CreateCourse} />
                <Route path="/courses/:id" component={AddLectures} />
                <Route path="/coursesInfo/:id" component={GetCourseInfo} />
                <Route path="/coursesEdit/:id" component={CourseList} />
                <Route path="/enrollStudents/:id" component={EnrollStudents} />
                <Route path="/unenrollStudents/:id" component={UnEnrollStudents} />
                <Route path="/getlectures/" component={GetLecturesInfo}/>
            
 */}



                <Route path="/" component={Home} exact={true} />
                <Route path="/register" component={Register} />
                <Route path="/login" render={((props) => {
                    return <Login {...props} handleAuth={handleAuth} />
                })} />




            </Box>
        </div>


    )
}
export default withRouter(NavBar)