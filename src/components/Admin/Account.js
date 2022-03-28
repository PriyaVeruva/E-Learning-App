import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { startAdminAccount, startUpdatedAdmin } from "../../actions/adminAccount";
import { Button } from "@mui/material";
import FormData from "../Admin/FormData";
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { makeStyles } from '@mui/styles'
import EditIcon from '@mui/icons-material/Edit';
const useStyles = makeStyles(theme => ({
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
const Account = (props) => {
    const classes = useStyles()
    const [toggle, setToggle] = useState(false)
    const dispatch = useDispatch()
    const adminInfo = useSelector((state) => {
        return state.adminInfo
    })
    useEffect(() => {

        dispatch(startAdminAccount())

    }, [])
    const handleToggle = () => {
        const result = !toggle
        setToggle(result)
    }
    const formSubmission = (formData) => {
        dispatch(startUpdatedAdmin(formData, handleToggle))
    }
    return (
        <div>
            {
                toggle ?
                    <div>
                        <Button onClick={handleToggle} color="primary" float='left'><NavigateBeforeIcon sx={{ fontSize: 40 }} /></Button>
                        <FormData
                            adminName={adminInfo.username}
                            e={adminInfo.email}
                            instituetName={adminInfo.academy.name}
                            instituetWebsite={adminInfo.academy.website}
                            toggle={toggle}
                            formSubmission={formSubmission} />
                    </div>
                    :
                    <div className={`${classes.text} ${classes.typography}`}>
                        <h1 style={{color:"blueviolet"}}>My Profile  <Button onClick={handleToggle} color="primary" float='left'><EditIcon /></Button></h1>
                        <p>Email-{adminInfo.email}</p>
                        <p>UserName-{adminInfo.username}</p>
                        <p>Academy Name-{adminInfo.academy && adminInfo.academy.name}</p>
                        <p>Academy Website-{adminInfo.academy && adminInfo.academy.website}</p>

                    </div>
            }
        </div>
         )
}
export default Account