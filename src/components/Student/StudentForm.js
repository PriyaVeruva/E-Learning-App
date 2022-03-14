import React, { useState } from "react"
import validator from "validator"
import {Box, Container, Typography,Paper, TextField, Button } from '@mui/material'
import {makeStyles} from '@mui/styles'
const useStyles  = makeStyles(theme =>({
    root :{
        width :'75vw',
        height : "150vh",
        //backgroundColor : theme.palette.grey[300],
      paddingTop : '50px'
    }
}))
const StudentForm = (props) => {
    const classes=useStyles()
    const { formSubmission ,name:n,email:e,toggle,_id} = props
    const [name, setName] = useState(n?n:'')
    const [email, setEmail] = useState(e?e:'')
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
            _id:_id,
            name: name,
            email: email,
            password: password,
            isAllowed: 'true'
        }
       console.log(formData)
        formSubmission(formData)
        setName('')
        setEmail('')
        setPassword('')
    }
    return (
        <div>
            {/* <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input type="text"
                    name="name"
                    value={name}
                    onChange={handleChange}
                    placeholder="Name"
                />{formErrors.length !== 0 && <span>{formErrors.name}</span>}<br />

                <label>Email</label>
                <input type="email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                    placeholder="Email Address"
                /> {formErrors.length !== 0 && <span>{formErrors.email}</span>}<br />

    {!toggle&&   
    <div>       
     <label>Password</label>
                <input type="password"
                    name="password"
                    value={password}
                    onChange={handleChange}
                    placeholder="Password "
                />{formErrors.length !== 0 && <span>{formErrors.password}</span>}<br />
                </div>
    }

                <input type="submit" value="Register Student" />
            </form>*/}

<center>
<Container className = {classes.root} maxWidth="md">
    <Paper component ={Box} width ="50%" mx= "auto" p={4}>
        {!toggle?<Typography variant ="h4">
            Sign Up 
        </Typography>:<Typography variant ="h4">
            Update Profile Details
        </Typography>}
        <form onSubmit={handleSubmit}>
            <TextField fullWidth placeholder="Enter your Name" margin ="normal" variant ="outlined" color ="secondary" label ="Name"
            value ={name} name ="name" onChange ={handleChange}/>
            {formErrors.name && <span style={{color : 'red'}}>{formErrors.name}</span>}


            <TextField fullWidth placeholder ="Enter your Email" margin ="normal" variant ="outlined" color ="secondary" label ="Email"
            value ={email} name ="email" onChange = {handleChange}/>
            {formErrors.email && <span style={{color : 'red'}}>{formErrors.email}</span>}

           {!toggle&& <div><TextField fullWidth placeholder ="Enter Password" margin ="normal" variant ="outlined" color ="secondary" label ="Password"
            type = "password" value ={password} name ="password" onChange ={handleChange}/>
            { formErrors.password&& <span style={{color : 'red'}}> {formErrors.password} </span> }
            </div>
            }

            

            {!toggle ? <Button type="submit" variant="contained" color="primary" float ='left'> Create New Account </Button> :<Button type="submit" variant="contained" color="primary" float ='left'> Update </Button> }
            

           
        </form>
    </Paper>
</Container>
</center>

        </div> 
    )
}
export default StudentForm