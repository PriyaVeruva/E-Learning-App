import React, { useState } from "react";
import { Box, Container, Paper, TextField, Button } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { Checkbox, Select as MuiSelect, FormControl, InputLabel, Typography,MenuItem } from "@mui/material";
const useStyles = makeStyles(
    ({
        root: {
            width: '75vw',
            height: "150vh",
            paddingTop: '50px'
        }
    }))
const CourseForm = (props) => {
    const classes = useStyles()
    const { formSubmission, name: n, description: d, duration: du, isDelete: del, category: cat, validity: val, releaseDate: rel, level: lev, author: auth, toggle } = props
    const [name, setName] = useState(n ? n : '')
    const [description, setDescription] = useState(d ? d : '')
    const [duration, setDuration] = useState(du ? du : '')
    const [isDelete, setIsDelete] = useState(false)
    const [category, setCategory] = useState(cat ? cat : '')
    const courses = ['HTML', 'CSS', 'javascript', 'reactjs', 'nodejs', 'expressjs', 'mongodb']
    const [validity, setValidity] = useState(val ? val : '')
    const [releaseDate, setReleaseDate] = useState(rel ? rel : '')
    const [level, setLevel] = useState(lev ? lev : '')
    const levels = ['beginner', 'intermediate', 'expert']
    const [author, setAuthor] = useState(auth ? auth : '')
    const [formErrors, setFormErrors] = useState({})
    const errors = {}
    const handleChange = (e) => {
        const input = e.target.name
        if (input === "name") {
            setName(e.target.value)
        }
        if (input === "description") {
            setDescription(e.target.value)
        }
        if (input === "duration") {
            setDuration(e.target.value)
        }
        if (input === "isDelete") {
            setIsDelete(e.target.value)
        }
        if (input === "category") {
            setCategory(e.target.value)
        }
        if (input === "validity") {
            setValidity(e.target.value)
        }
        if (input === "releaseDate") {
            setReleaseDate(e.target.value)
        }
        if (input === "level") {
            setLevel(e.target.value)
        }
        if (input === "author") {
            setAuthor(e.target.value)
        }

    }

    //validations
    const runValidations = () => {
        if (name.trim().length === 0) {
            errors.name = "course name is required"
        }
        if (description.trim().length === 0) {
            errors.description = "description is required"
        }
        if (duration.length === 0) {
            errors.duration = "duration is required"
        }
        if (releaseDate.length === 0) {
            errors.releaseDate = "releaseDate is required"
        }
        if (category.length === 0) {
            errors.category = "category is required"
        }
        if (validity.length === 0) {
            errors.validity = "validations is required"
        }
        if (level.length === 0) {
            errors.level = "level is required"
        }
        if (author.length === 0) {
            errors.author = "author name is required"
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
            description: description,
            duration: Number(duration),
            isDelete: isDelete,
            category: category,
            level: level,
            releaseDate: (releaseDate),
            validity: Number(validity),
            author: author
        }
        formSubmission(formData)
        setName('')
        setDescription('')
        setDuration('')
        setIsDelete('')
        setCategory('')
        setValidity('')
        setReleaseDate('')
        setLevel('')
        setAuthor('')
    }
    return (
        <div>
            <center>
                <Container className={classes.root} maxWidth="md">
                    <Paper component={Box} width="50%" mx="auto" p={4}>
                    {!toggle ? <div><Typography variant="h4" color="Highlight">
                            Add Course Info
                        </Typography>  </div> : <Typography variant="h4" color="Highlight">
                            Update Course Info
                        </Typography>}
                        <form onSubmit={handleSubmit}>
                            <TextField fullWidth placeholder="Enter your Name" margin="normal" variant="outlined" color="secondary" label="Name"
                                value={name} name="name" onChange={handleChange} />
                            {formErrors.name && <span style={{ color: 'red' }}>{formErrors.name}</span>}
                            <TextField fullWidth placeholder="Description" margin="normal" variant="outlined" color="secondary" label="Description" value={description} name="description" onChange={handleChange} />
                            {formErrors.description && <span style={{ color: 'red' }}>{formErrors.description}</span>}
                            <TextField fullWidth placeholder="Duration" margin="normal" variant="outlined" color="secondary" label="Duration" type="number" value={duration} name="duration" onChange={handleChange} />
                            {formErrors.duration && <span style={{ color: 'red' }}>{formErrors.duration}</span>}
                         {!toggle&&   <TextField fullWidth margin="normal" variant="outlined" color="secondary" type="date" value={releaseDate} name="releaseDate" onChange={handleChange} />}
                            {formErrors.releaseDate && <span style={{ color: 'red' }}> {formErrors.releaseDate} </span>}
                            <FormControl fullWidth className={classes.formControl}>
                                <InputLabel>Category</InputLabel>
                                <MuiSelect value={category} name="category" onChange={handleChange}>
                                    {
                                        courses.map((ele, i) => {
                                            return <MenuItem value={ele} key={i}>{ele}</MenuItem>
                                        })
                                    }
                                </MuiSelect>{formErrors.length !== 0 && <span style={{ color: 'red' }}>{formErrors.category}</span>}
                            </FormControl>
                            <TextField fullWidth placeholder="Validity" margin="normal" variant="outlined" color="secondary" label="Validity" type="number" value={validity} name="validity" onChange={handleChange} />
                            {formErrors.validity && <span style={{ color: 'red' }}>{formErrors.validity}</span>}<br />
                            <FormControl fullWidth className={classes.formControl}>
                                <InputLabel>Level</InputLabel>
                                <MuiSelect value={level} name="level" onChange={handleChange}>
                                    {
                                        levels.map((ele, i) => {
                                            return <MenuItem value={ele} key={i}>{ele}</MenuItem>
                                        })
                                    }
                                </MuiSelect>{formErrors.length !== 0 && <span style={{ color: 'red' }}>{formErrors.level}</span>}
                            </FormControl><br />
                            <TextField fullWidth placeholder="Author Name" margin="normal" variant="outlined" color="secondary" label="Author Name" value={author} name="author" onChange={handleChange} />
                            {formErrors.author && <span style={{ color: 'red' }}>{formErrors.author}</span>}<br />
                            <Checkbox margin="normal" variant="outlined" color="secondary" label="isDelete" type="checkbox" value={isDelete} name="isDelete" onChange={handleChange} />
                            {formErrors.isDelete && <span style={{ color: 'red' }}>{formErrors.isDelete}</span>} isDelete<br />
                            <Button type="submit" variant="contained" color="primary" float='left'>Submit</Button>
                        </form>
                    </Paper>
                </Container>
            </center>
        </div>
    )
}
export default CourseForm