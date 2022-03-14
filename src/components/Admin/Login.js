import React, { useState } from "react";
import validator from "validator";
import { useDispatch } from "react-redux";
import { startTokenData, startStudentTokenData } from "../../actions/loginForm";
import { makeStyles } from "@mui/styles";
import { TextField, Container, Link, Button, Grid, Typography, Avatar, Paper, Box } from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import swal from 'sweetalert'
import Radio from '@mui/material/Radio'
import {ToastContainer,toast} from "react-toastify"
import"react-toastify/dist/ReactToastify.css"
const useStyles = makeStyles((theme) => ({
    avatar: {
    //     //margin: theme.spacing(2),
  // backgroundColor: 'secondary.main',
    //     //paddingTop : theme.spacing(2),
       padding:'20px'
     },

    root: {
        width: '75vw',
        height: "150vh",
        //backgroundColor : theme.palette.grey[300],
        paddingTop : '50px'
    }
}))
const Login = (props) => {
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
            dispatch(startTokenData(formData, props.handleAuth,swal,toast))
            localStorage.setItem("role", "admin")
        }
        if (radio === "student") {
            dispatch(startStudentTokenData(formData, props.handleAuth,swal,toast))
            localStorage.setItem("role", "student")
        }

        setEmail('')
        setPassword('')
    }
    const classes = useStyles();
    return (

        <div>
            <center>
            <Container className={classes.root} maxWidth="md" component="main" style={{ textAlign: "center" }}>
                <Paper component={Box} width="50%" mx="auto" p={4} >
                    <Avatar className={classes.avatar} >
                    <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">Log In</Typography>
                    <form onSubmit={handleSubmit}>

                        <Radio color="secondary"
                            type="radio" value="admin" name="radio" checked={radio === 'admin'} onChange={loginChange} />Admin


                        <Radio color="secondary"
                            type="radio" value="student" name="radio" checked={radio === 'student'} onChange={loginChange} />Student


                        <TextField fullWidth placeholder="Enter your Email" margin="normal" variant="outlined" color="secondary" label="Email"
                            value={email} name="email" onChange={handleChange} />
                        {formErrors.length !== 0 && <span style={{ color: 'red' }}>{formErrors.email}</span>}

                        <TextField fullWidth placeholder="Enter Password" margin="normal" variant="outlined" color="secondary" label="Password"
                            type="password" value={password} name="password" onChange={handleChange} />
                        {formErrors.length !== 0 && <span style={{ color: 'red' }}> {formErrors.password} </span>}

                        <Grid container justify="flex-end" margin="left" p={4}>
                            <Grid item>
                                {radio === "admin" && <div>
                                    <Link href="/register" variant="body2">
                                        Don't have an account? Sign up
                                    </Link>
                                    <Button type="submit" variant="contained" color="primary" > Sign in </Button>
<ToastContainer/>
                                </div>}

                                {radio === "student" && <div><Button type="submit" variant="contained" color="primary" > Sign in </Button>
                                <ToastContainer/>
                                </div>
                                }


                            </Grid>
                        </Grid>
                    </form>
                </Paper>
            </Container>
            </center>
        </div>

    )
}

export default Login