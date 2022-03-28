import React from 'react'
import { useSelector } from "react-redux"
import ReactPlayer from 'react-player/youtube'
import { Link } from "react-router-dom"
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
const Play = (props) => {
    const lectures = useSelector((state) => {
        return state.lectures
    })
    console.log(lectures,'lectures')
    return (
        <div className="App">
           {localStorage.getItem('role')==="admin"? <Link to="/allcourses"><NavigateBeforeIcon sx={{ fontSize: 40 }} /></Link>:<Link to="/enrolledcourses"><NavigateBeforeIcon sx={{ fontSize: 40 }} /></Link>}
            <center>
                {lectures.map(ele => {
                    return (
                        <div key={ele._id}>
                            <ReactPlayer url={ele.assetURL} controls={true} />
                        </div>
                    )
                })}
            </center>
        </div>
    )
}
export default Play