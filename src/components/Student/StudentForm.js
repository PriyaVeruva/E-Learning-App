import React, { useState } from "react"
import validator from "validator"
import { Box, Container, Paper, TextField, Button } from '@mui/material'
import { makeStyles } from '@mui/styles'
const useStyles = makeStyles(({
    root: {

        '& MuiControl-root': {
            width: '80%',
            margin: '4'
        }
    },
    formControl: {
        minWidth: 100
    }
}))
const StudentForm = (props) => {
    const classes = useStyles()
    const { formSubmission, name: n, email: e, toggle, _id } = props
    const [name, setName] = useState(n ? n : '')
    const [email, setEmail] = useState(e ? e : '')
    const [password, setPassword] = useState('')
    const [formErrors, setFormErrors] = useState({})
    const errors = {}
    const handleChange = (e) => {
        const input = e.target.name
        if (input === "name") {
            setName(e.target.value)
        }
        if (input === "email") {
            setEmail(e.target.value)
        }
        if (input === "password") {
            setPassword(e.target.value)
        }
    }
    //validations
    const runValidations = () => {
        if (name.trim().length === 0) {
            errors.name = "name is required"
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

            name: name,
            email: email,
            password: password,
            isAllowed: 'true'
        }

        formSubmission(formData)
        setName('')
        setEmail('')
        setPassword('')
    }
    return (
        <div>
            <center>
                <Container className={classes.root} maxWidth="md">
                    <Paper component={Box} width="50%" mx="auto" p={4}>

                        <form onSubmit={handleSubmit}>
                            <TextField fullWidth placeholder="Enter your Name" margin="normal" variant="outlined" color="secondary" label="Name" value={name} name="name" onChange={handleChange} />
                            {formErrors.name && <span style={{ color: 'red' }}>{formErrors.name}</span>}
                            <TextField fullWidth placeholder="Enter your Email" margin="normal" variant="outlined" color="secondary" label="Email" value={email} name="email" onChange={handleChange} />
                            {formErrors.email && <span style={{ color: 'red' }}>{formErrors.email}</span>}
                            {!toggle && <div><TextField fullWidth placeholder="Enter Password" margin="normal" variant="outlined" color="secondary" label="Password" type="password" value={password} name="password" onChange={handleChange} />
                                {formErrors.password && <span style={{ color: 'red' }}> {formErrors.password} </span>}
                            </div>
                            }
                            <Button type="submit" variant="contained" color="primary" float='left'> Submit </Button>
                        </form>
                    </Paper>
                </Container>
            </center>
        </div>
    )
}
export default StudentForm