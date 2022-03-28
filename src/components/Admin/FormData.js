import React, { useState } from "react"
import validator from "validator"
import { Box, Container, Typography, Paper, Avatar, TextField, Button } from '@mui/material'
import { makeStyles } from '@mui/styles'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
const useStyles = makeStyles(
    ({
        root: {
            width: '75vw',
            height: "150vh",
            paddingTop: '50px'
        }
    }))
const FormData = (props) => {
    const classes = useStyles()
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const { formSubmission, adminName, e, instituetName, instituetWebsite, toggle } = props
    const [username, setUserName] = useState(adminName ? adminName : '')
    const [email, setEmail] = useState(e ? e : '')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [formErrors, setFormErrors] = useState({})
    const [academyName, setAcademyName] = useState(instituetName ? instituetName : '')
    const [academyWebsite, setAcademyWebsite] = useState(instituetWebsite ? instituetWebsite : '')
    const errors = {}
    const handleChange = (e) => {
        const input = e.target.name
        if (input === "username") {
            setUserName(e.target.value)
        }
        if (input === "email") {
            setEmail(e.target.value)
        }
        if (input === "password") {
            setPassword(e.target.value)
        }
        if (input === "confirmPassword") {
            setConfirmPassword(e.target.value)
        }
        if (input === "academyName") {
            setAcademyName(e.target.value)
        }
        if (input === "academyWebsite") {
            setAcademyWebsite(e.target.value)
        }
    }


    //validations
    const runValidations = () => {
        if (username.trim().length === 0) {
            errors.username = "username is required"
        }
        if (email.trim().length === 0) {
            errors.email = "email is required"
        }
        else if (!validator.isEmail(email)) {
            errors.email = "invalid email address"
        }
        if (password.trim().length === 0) {
            errors.password = "password is required"
        }
        else if (password.length <= 5 || password.length >= 128) {
            errors.password = "invalid password"
        }
        else if (password.includes(confirmPassword)) {
            errors.confirmPassword = " password matches"
        }
        else {
            errors.confirmPassword = "password did'nt match.Try again"
        }
        if (academyName.length === 0) {
            errors.academyName = "academy name is required"
        }
        if (academyWebsite.length === 0) {
            errors.academyWebsite = "academy website is required"
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        runValidations()
        if (Object.keys(errors).length === 0) {
            setFormErrors({})
        }
        else {
            setFormErrors(errors)
        }

        const formData = {
            username: username,
            email: email,
            password: password,
            academy: {
                name: academyName,
                website: academyWebsite
            }
        }
        formSubmission(formData)
        setUserName('')
        setEmail('')
        setPassword('')
        setConfirmPassword('')
        setAcademyName('')
        setAcademyWebsite('')
    }
    return (
        <div>
            <center>
                <Container className={classes.root} maxWidth="md">
                    <Paper component={Box} width="50%" mx="auto" p={4}>
                        <Avatar style={avatarStyle}>
                            <AddCircleOutlineOutlinedIcon />
                        </Avatar>
                        {!toggle ? <div><Typography variant="h4">
                            Sign Up
                        </Typography>   <Typography variant='caption' gutterBottom>Please fill this form to create an account !</Typography></div> : <Typography variant="h4">
                            Update Profile Details
                        </Typography>}
                        <form onSubmit={handleSubmit}>
                            <TextField fullWidth placeholder="Enter your Name" margin="normal" variant="outlined" color="secondary" label="Name"
                                value={username} name="username" onChange={handleChange} />
                            {formErrors.username && <span style={{ color: 'red' }}>{formErrors.username}</span>} <TextField fullWidth placeholder="Enter your Email" margin="normal" variant="outlined" color="secondary" label="Email"
                                value={email} name="email" onChange={handleChange} />
                            {formErrors.email && <span style={{ color: 'red' }}>{formErrors.email}</span>}
                            {!toggle && <div><TextField fullWidth placeholder="Enter Password" margin="normal" variant="outlined" color="secondary" label="Password"
                                type="password" value={password} name="password" onChange={handleChange} />
                                {formErrors.password && <span style={{ color: 'red' }}> {formErrors.password} </span>}
                            </div>
                            }
                            <TextField fullWidth placeholder="Enter your Academy Name" margin="normal" variant="outlined" color="secondary" label="Academy Name"
                                value={academyName} name="academyName" onChange={handleChange} />
                            {formErrors.academyName && <span style={{ color: 'red' }}>{formErrors.academyName}</span>}
                            <TextField fullWidth placeholder="Enter your Academy Website" margin="normal" variant="outlined" color="secondary" label="Academy Website" type="url" value={academyWebsite} name="academyWebsite" onChange={handleChange} />
                            {formErrors.academyWebsite && <span style={{ color: 'red' }}>{formErrors.academyWebsite}</span>}
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        name="checkedB"
                                        color="primary"
                                    />
                                }
                                label="I accept the academy terms and conditions"
                            />  {!toggle ? <Button type="submit" variant="contained" color="primary" float='left'> Create New Account </Button> : <Button type="submit" variant="contained" color="primary" float='left'> Update </Button>}
                        </form>
                    </Paper>
                </Container>
            </center>
        </div>
    )
}

export default FormData