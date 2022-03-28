import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { makeStyles } from '@mui/styles'
import { Link, withRouter } from 'react-router-dom';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import CreateLectures from "./CreateLectures"
import { Button } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

import { startUpdateLecture, startShowLectureInfo } from '../../actions/addLectures';

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
const GetLecturesInfo = (props) => {
    const { id } = props.match.params
    const cid = props.location.pathname.split('/')[2]
    const classes = useStyles()
    const dispatch = useDispatch()
    const [toggle, setToggle] = useState(false)
    const lectures = useSelector((state) => {
        return state.lectures
    })
    const handleToggle = () => {
        setToggle(!toggle)
    }
    useEffect(() => {
        dispatch(startShowLectureInfo(id, cid))
    }, [])

    const formSubmission = (formData) => {
        dispatch(startUpdateLecture(formData, cid, id, handleToggle))
    }
    return (
        <div>

            {toggle && localStorage.getItem('role') === "admin" ?


                <div>
                    <Link to="/allcourses"><KeyboardBackspaceIcon sx={{ fontSize: 40 }} color="primary"/></Link>

                    <Button onClick={handleToggle} color="primary" float='left'><NavigateBeforeIcon sx={{ fontSize: 40 }} /></Button>
                    {lectures.map(ele => {
                        return (
                            <div key={ele._id}>
                                <CreateLectures
                                    formSubmission={formSubmission}
                                    title={ele.title}
                                    description={ele.description}
                                    assetType={ele.assetType}
                                    assetURL={ele.assetURL}
                                    isDelete={ele.isDelete}
                                    toggle={toggle}
                                />
                            </div>
                        )
                    })}
                </div>
                :
                <div className={`${classes.text} ${classes.typography}`}>

                    {localStorage.getItem('role') === "admin" ? <h1 style={{ color: "Background" }}>Lectures Info <Button onClick={handleToggle} color="primary" float='left'><EditIcon /></Button></h1>
                        :
                        <div>
                            <Link to="/enrolledcourses"><NavigateBeforeIcon sx={{ fontSize: 40 }} style={{ float: "left" }} /></Link>

                            <h1 style={{ color: "blueviolet" }}>Lectures Info</h1>
                        </div>
                    }
                   

                    {
                        lectures.map(ele => {
                            return (
                                <div key={ele._id}>
                                    <p>Title:{ele.title}</p>
                                    <p>Description:{ele.description}</p>
                                    <p>AssetURL:{ele.assetURL}</p>
                                    <p>AssetType:{ele.assetType}</p>
                                </div>
                            )
                        })
                    }
                </div>
            }

        </div>
    )
}
export default withRouter(GetLecturesInfo)