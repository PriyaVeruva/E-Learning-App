import React,{useState} from "react";
import { Box, Container, Typography, Paper, TextField, Button } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { Checkbox, Select as MuiSelect, FormControl, InputLabel, MenuItem } from "@mui/material";

const useStyles = makeStyles(theme => ({
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
const CreateLectures=(props)=>
{
    const classes = useStyles()
    const{formSubmission}=props
    const[title,setTitle]=useState('')
    const[description,setDescription]=useState('')
    const[assetType,setAssetType]=useState('')
    const type=[ 'video', 'audio', 'text', 'pdf', 'img']
    const[assetURL,setassetURL]=useState('')
   const[isDelete,setIsDelete]=useState(false)
      const[formErrors,setFormErrors]=useState({})
      const errors={}

     const handleChange=(e)=>
     {
const input=e.target.name
if(input==="title")
{
    setTitle(e.target.value)
}
if(input==="description")
{
    setDescription(e.target.value)
}
if(input==="assetType")
{
    setAssetType(e.target.value)
}
if(input==="assetURL")
{
    setassetURL(e.target.value)
}

if(input==="isDelete")
{
    setIsDelete(e.target.checked)
}

     }
     //validations
     const runValidations = () => {
        if (title.trim().length === 0) {
            errors.title = "title is  required"
        }
        if (description.trim().length === 0) {
            errors.description = "description is required"
        }
        if (assetType.length === 0) {
            errors.assetType = "assetType is required"
        }

        if (assetURL.length === 0) {
            errors.assetURL = "assetURL is required"
        }
        
       

    }
     const handleSubmit=(e)=>
     {
         e.preventDefault()
         runValidations()
         if (Object.keys(errors).length === 0) {
            setFormErrors({})
        }
        else {
            setFormErrors(errors)
        }
         const formData={
             title:title,
             description:description,
             assetType:assetType,
             assetURL:assetURL,
             //course:"",
             isDelete:isDelete
             
         }
        // console.log(formData,'formData')
        formSubmission(formData)
         setTitle('')
         setDescription('')
         setAssetType('')
         setassetURL('')

         setIsDelete('')
     }
    
    return (
        <div>
{/* <form onSubmit={handleSubmit}>
    <label>Title</label>
<input type="text" value={title} name="title" placeholder="Title" onChange={handleChange}/>{formErrors.length !== 0 && <span>{formErrors.title}</span>}<br/>
<label>Description</label>
<input type="text" value={description} name="description" placeholder="Description" onChange={handleChange}/>{formErrors.length !== 0 && <span>{formErrors.description}</span>}<br/>
<label>Asset Type</label>
<select name="assetType" value={assetType} onChange={handleChange}>
<option>Select Type</option>
{
type.map((ele,i)=>
{
    return <option  value={ele} key={i}>{ele}</option>
})
}
</select>{formErrors.length !== 0 && <span>{formErrors.assetType}</span>}<br/>
<label>Url</label>
<input type="url" value={assetURL} placeholder="Enter Url" onChange={handleChange} name="assetURL"/>
{formErrors.length !== 0 && <span>{formErrors.assetURL}</span>}<br/>

<input type="checkbox" value={isDelete} checked={isDelete} name="isDelete" onChange={handleChange}/>isDelete<br/>
<input type="submit" value="save"/>
</form> */}


<center>
                <Container className={classes.root} maxWidth="md">
                    <Paper component={Box} width="50%" mx="auto" p={4}>
                        
                        <form onSubmit={handleSubmit}>
                            <TextField fullWidth placeholder="Title" margin="normal" variant="outlined" color="secondary" label="Title"
                                value={title} title="title" onChange={handleChange} />
                            {formErrors.title && <span style={{ color: 'red' }}>{formErrors.title}</span>}


                            <TextField fullWidth placeholder="Description" margin="normal" variant="outlined" color="secondary" label="Description"
                                value={description} name="description" onChange={handleChange} />
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

                            <TextField fullWidth placeholder="Asset URL" margin="normal" variant="outlined" color="secondary" label="assetURL" type="url"
                                value={assetURL} name="assetURL" onChange={handleChange} />
                            {formErrors.assetURL && <span style={{ color: 'red' }}>{formErrors.assetURL}</span>}<br />

                            





                            <Checkbox margin="normal" variant="outlined" color="secondary" label="isDelete" type="checkbox"
                                value={isDelete} name="isDelete" onChange={handleChange} />
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