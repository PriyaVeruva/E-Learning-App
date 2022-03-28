import React, { useState } from "react";
import { Box, Container, Typography, Paper, TextField, Button } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { Checkbox, Select as MuiSelect, FormControl, InputLabel, MenuItem } from "@mui/material";
const useStyles = makeStyles(
    ({
        root: {
            width: '75vw',
            height: "150vh",
            paddingTop: '50px'
        }
    }))
const CreateLectures = (props) => {
    const classes = useStyles()
    const { formSubmission, title: t, description: d, assetType: types, assetURL: url, isDelete: del, toggle } = props
    const [title, setTitle] = useState(t ? t : '')
    const [description, setDescription] = useState(d ? d : '')
    const [assetType, setAssetType] = useState(types ? types : '')
    const type = ['video', 'audio', 'text', 'pdf', 'img']
    const [assetURL, setassetURL] = useState(url ? url : '')
    const [isDelete, setIsDelete] = useState(false)
    const [formErrors, setFormErrors] = useState({})
    const errors = {}

    const handleChange = (e) => {
        const input = e.target.name
        if (input === "title") {
            setTitle(e.target.value)
        }
        if (input === "description") {
            setDescription(e.target.value)
        }
        if (input === "assetType") {
            setAssetType(e.target.value)
        }
        if (input === "assetURL") {
            setassetURL(e.target.value)
        }

        if (input === "isDelete") {
            setIsDelete(e.target.checked)
        }

    }
    //validations
    const runValidations = () => {
        if (title.length === 0) {
            errors.title = "title is  required"
        }
        if (description.length === 0) {
            errors.description = "description is required"
        }
        if (assetType.length === 0) {
            errors.assetType = "assetType is required"
        }

        if (assetURL.length === 0) {
            errors.assetURL = "assetURL is required"
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
            title: title,
            description: description,
            assetType: assetType,
            assetURL: assetURL,
            //course:"",
            isDelete: isDelete

        }
        formSubmission(formData)
        setTitle('')
        setDescription('')
        setAssetType('')
        setassetURL('')
        setIsDelete('')
    }
    return (
        <div>
            <center>
                <Container className={classes.root} maxWidth="md">
                    <Paper component={Box} width="50%" mx="auto" p={4}>
                        <form onSubmit={handleSubmit}>
                            {!toggle && <Typography className="container" textAlign="center" margin="1rem auto" style={{ justifycontent: "center" }} variant="h4" color="Highlight">
                                Add Lectures Info
                            </Typography>
                            }
                            {toggle && <Typography className="container" textAlign="center" margin="1rem auto" style={{ justifycontent: "center" }} variant="h4" color="Highlight">
                                Update Lectures Info
                            </Typography>
                            }  <TextField fullWidth placeholder="Title" margin="normal" variant="outlined" color="secondary" label="Title" value={title} name="title" onChange={handleChange} />
                            {formErrors.title && <span style={{ color: 'red' }}>{formErrors.title}</span>}
                            <TextField fullWidth placeholder="Description" margin="normal" variant="outlined" color="secondary" label="Description" value={description} name="description" onChange={handleChange} />
                            {formErrors.description && <span style={{ color: 'red' }}>{formErrors.description}</span>}
                            <FormControl fullWidth className={classes.formControl}>
                                <InputLabel>Asset Type</InputLabel>
                                <MuiSelect value={assetType} name="assetType" onChange={handleChange}>
                                    {
                                        type.map((ele, i) => {
                                            return <MenuItem value={ele} key={i}>{ele}</MenuItem>
                                        })
                                    }
                                </MuiSelect>{formErrors.length !== 0 && <span style={{ color: 'red' }}>{formErrors.assetType}</span>}<br />
                            </FormControl>
                            <TextField fullWidth placeholder="Asset URL" margin="normal" variant="outlined" color="secondary" label="assetURL" type="url" value={assetURL} name="assetURL" onChange={handleChange} />
                            {formErrors.assetURL && <span style={{ color: 'red' }}>{formErrors.assetURL}</span>}<br />
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
export default CreateLectures