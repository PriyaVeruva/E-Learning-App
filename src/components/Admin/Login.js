import React, { useState } from "react";
import validator from "validator";
import { useDispatch } from "react-redux";
import { startTokenData, startStudentTokenData } from "../../actions/loginForm";
import { TextField,  Link, Button, Grid, Typography, Avatar, Paper } from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import swal from 'sweetalert'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio'
const Login = (props) => {
    const paperStyle = { padding: 20, height: '76vh', width: 400, margin: "20px auto" }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const btnstyle = { margin: '8px 0' }
    const dispatch = useDispatch()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [radio, setRadio] = useState('admin')
    const [formErrors, setFormErrors] = useState({})
    const errors = {}
    const handleChange = (e) => {
        const input = e.target.name
        if (input === "email") {
            setEmail(e.target.value)
        }
        if (input === "password") {
            setPassword(e.target.value)
        }
    }
    //validations
    const runValidations = () => {
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
    }
    const loginChange = (e) => {
        const result = e.target.value
        setRadio(result)
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
            email: email,
            password: password,
        }
        if (radio === "admin") {
            dispatch(startTokenData(formData, props.handleAuth, swal))
            localStorage.setItem("role", "admin")
        }
        if (radio === "student") {
            dispatch(startStudentTokenData(formData, props.handleAuth, swal))
            localStorage.setItem("role", "student")
        }
        setEmail('')
        setPassword('')
    }
    return (
        <div>
            <Grid>
                <Paper elevation={20} style={paperStyle} >
                    <Grid align='center'>
                        <Avatar style={avatarStyle}><LockOutlinedIcon /></Avatar>
                        <h2>Sign In</h2>
                    </Grid>
                    <form onSubmit={handleSubmit}>
                        <TextField fullWidth placeholder="Enter your Email" margin="normal" variant="outlined" color="secondary" label="Email" value={email} name="email" onChange={handleChange} />
                        {formErrors.length !== 0 && <span style={{ color: 'red' }}>{formErrors.email}</span>}
                        <TextField fullWidth placeholder="Enter Password" margin="normal" variant="outlined" color="secondary" label="Password" type="password" value={password} name="password" onChange={handleChange} />
                        {formErrors.length !== 0 && <span style={{ color: 'red' }}> {formErrors.password} </span>}
                        <Radio color="secondary" type="radio" value="admin" name="radio" checked={radio === 'admin'} onChange={loginChange} />Admin
                        <Radio color="secondary" type="radio" value="student" name="radio" checked={radio === 'student'} onChange={loginChange} />Student
                        {radio === "admin" && <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Sign in</Button>}
                        {radio === "student" && <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Sign in</Button>}
                        <FormControlLabel
                            control={
                                <Checkbox
                                    name="checkedB"
                                    color="primary"
                                />
                            }
                            label="Keep me signed in"
                        />
                        <Grid item>
                            {radio === "admin" && <Typography >New to Academy?
                                <Link href="/register" variant="body2">
                                    Sign up
                                </Link>
                            </Typography>}
                        </Grid>
                    </form>
                </Paper>
            </Grid>
        </div>
    )
}

export default Login