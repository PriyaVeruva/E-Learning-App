import React from 'react'
import { useSelector } from "react-redux"
import { makeStyles } from '@mui/styles'
import { Link } from 'react-router-dom';
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
const GetLecturesInfo = (props) => {
    const classes = useStyles()

    const lectures = useSelector((state) => {
        return state.lectures
    })

    return (
        <div>
            <Link to="/allcourses"><NavigateBeforeIcon sx={{ fontSize: 40 }} /></Link>


            <div className={`${classes.text} ${classes.typography}`}>

                <h1>Lectures Info</h1>

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
        </div>
    )
}
export default GetLecturesInfo