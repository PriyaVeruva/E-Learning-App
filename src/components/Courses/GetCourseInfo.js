import React, { useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { startCoursesList } from "../../actions/courses";
import { makeStyles } from '@mui/styles'
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
const useStyles = makeStyles(({
    root: {
        width: '75vw',
        height: "150vh",
        paddingTop: '50px'
    },
    typography: {
        fontSize: 15
    },
    text: {
        "marginTop": "70px",
        "textAlign": "center"
    }

}))

const GetCourseInfo = (props) => {
    const classes = useStyles()
    const { id } = props.match.params
    const dispatch = useDispatch()
    const courses = useSelector((state) => {
        return state.courses
    })
    useEffect(() => {
        dispatch(startCoursesList(id, props.history.push))
    }, [])
    return (
        <div>
    {localStorage.getItem('role')==="admin"?<Link to="/allcourses"><NavigateBeforeIcon sx={{ fontSize: 40 }} /></Link>:   <Link to="/enrolledcourses"><NavigateBeforeIcon sx={{ fontSize: 40 }} /></Link>}
            <div className={`${classes.text} ${classes.typography}`}>
                <h1 style={{color:"Background"}}>Course Details</h1>
                {
                    courses.map(ele => {
                        return (
                            <div key={ele._id} >
                                <p>Name:{ele.name}</p>
                                <p>Description:{ele.description}</p>
                                <p>Category:{ele.category}</p>
                                <p>Level:{ele.level}</p>
                                <p>Author:{ele.author}</p>
                               
                         {localStorage.getItem('role')==="admin"? <p>Students:{ele.students.length}</p>:""}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default withRouter(GetCourseInfo)