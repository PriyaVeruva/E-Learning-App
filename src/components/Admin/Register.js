import React from "react"
import { useDispatch } from "react-redux"
import { startFormData } from "../../actions/registerformActions"
import FormData from "../Admin/FormData"
import { Button } from "@mui/material"
import LoginIcon from '@mui/icons-material/Login';
const Register = (props) => {
    const dispatch = useDispatch()
    const formSubmission = (formData) => {
        dispatch(startFormData(formData, props.history.push))
    }
    return (
        <div>
            <Button type="submit" variant="contained" color="secondary" float='left' onClick={() => props.history.push("/login")}><LoginIcon /> </Button>
            <FormData formSubmission={formSubmission} />
        </div>
    )
}
export default Register