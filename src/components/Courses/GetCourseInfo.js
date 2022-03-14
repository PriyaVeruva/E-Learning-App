import React, { useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { startCoursesList } from "../../actions/courseList";
import { makeStyles } from '@mui/styles'
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

const useStyles = makeStyles(theme => ({
    root: {
        width: '75vw',
        height: "150vh",
        //backgroundColor : theme.palette.grey[300],
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
    const coursesForm = useSelector((state) => {
        return state.coursesForm
    })
    useEffect(() => {
        dispatch(startCoursesList(id, props.history.push))
    }, [])

    return (
        <div>
            <Link to="/allcourses"><NavigateBeforeIcon sx={{ fontSize: 40 }} /></Link>


            <div className={`${classes.text} ${classes.typography}`}>

                <h1>Course Details</h1>
                {
                    coursesForm.map(ele => {
                        return (
                            <div key={ele._id} >
                                <p>Name:{ele.name}</p>
                                <p>Description:{ele.description}</p>
                                <p>Category:{ele.category}</p>
                                <p>Level:{ele.level}</p>
                                <p>Author:{ele.author}</p>
                                <p>ISDELETE:{ele.isDelete}</p>
                                <p>Students:{ele.students.length}</p>

                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default withRouter(GetCourseInfo)