import React, { useState } from "react";
import CreateLectures from "./CreateLectures";
import { startCreateLectures } from "../actions/addLectures";
import { useDispatch } from "react-redux"
import AllLectures from "./AllLectures";
import { Grid, Button, Typography } from "@mui/material"
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { Link } from "react-router-dom";
import swal from "sweetalert"
const AddLectures = (props) => {
    const dispatch = useDispatch()
    const { id } = props.match.params
    console.log(id, 'id')
    const [toggle, setToggle] = useState(false)
    const handleToggle = () => {
        setToggle(!toggle)
    }
    const formSubmission = (formData) => {
        dispatch(startCreateLectures(formData, id))
    }
    return (
        <div>
            <div>
             <Link to="/allcourses"><NavigateBeforeIcon sx={{ fontSize: 40 }} /></Link>
             </div>

            {
                toggle ?
                    <div>



                        <Button onClick={handleToggle} ><NavigateBeforeIcon sx={{ fontSize: 40 }} /></Button>
                        <Typography className="container" textAlign="center" margin="1rem auto" style={{ justifycontent: "center" }} variant="h4">
                            Add Lectures Info
                        </Typography>
                        <CreateLectures formSubmission={formSubmission} />

                    </div>

                    :
                    <div>

                        <Grid
                            container
                            direction="column"
                            justify="flex-start"
                            alignItems="flex-end"
                            style={{ height: '100px' }}
                        >
                            <Grid item>
                                <Button onClick={handleToggle} ><GroupAddIcon sx={{ fontSize: 40 }} /></Button>
                            </Grid>
                        </Grid>
                        <AllLectures />
                    </div>
            }
        </div>
    )
}
export default AddLectures