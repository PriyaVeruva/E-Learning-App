import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { startAllCourses, startDeleteCourse } from "../../actions/courseList";
import { Link } from "react-router-dom";
import { Card, CardContent, CardMedia, CardHeader } from '@mui/material'
import { Button, IconButton, Container, Typography, Avatar } from "@mui/material";
import MoreVertIcon from '@mui/icons-material/MoreVert';

import Grid from '@mui/material/Grid';

import { DeleteOutlined } from '@mui/icons-material'
const AllCourses = (props) => {
    const [search, setSearch] = useState('')
    const dispatch = useDispatch()
    const state = useSelector((state) => {
        return state
    })
    useEffect(() => {
        dispatch(startAllCourses())
    }, [])
    //deleating a course
    const handleRemove = (_id) => {
        dispatch(startDeleteCourse(_id))

    }

    return (
        <div>
            {localStorage.getItem('role') === "admin" ?
                <div>
                    <input type="text" placeholder="Search.." className="form-control" style={{ marginTop: 50, marginBottom: 20, width: "30%", float: "right" }}
                        onChange={(e) => {
                            setSearch(e.target.value)
                        }} />
                    {

                        <Container>
                            <Grid container spacing={1}

                            >
                                {state.coursesForm.filter((ele) => {
                                    if (search === "") {
                                        return ele
                                    }
                                    else if (

                                        ele.name.toLowerCase().includes(search.toLowerCase())

                                    ) {
                                        return ele
                                    }
                                }).map(ele => (

                                    <Grid item key={ele._id} xs={12} md={6} lg={4}>
                                        <Card sx={{ maxWidth: 345 }} >
                                            <CardHeader
                                                action={

                                                    <IconButton className="mr-2" onClick={() => handleRemove(ele._id)}>
                                                        <DeleteOutlined />
                                                        

                                                    </IconButton>

                                                }

                                                title={<Link to={"courses/" + ele._id}>{ele.name}</Link>
                                                }
                                                subheader={ele.description}
                                            />

                                            <CardMedia
                                                component="img"
                                                height="194"
                                                image="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/154254251/original/759d7276276884fe19f3b59a9d9a2321dbbb3773/create-your-website-in-php-nodejs-python-react-laravel.jpeg"
                                                alt="Paella dish"
                                            />
                                            <CardContent>
                                                <Typography variant="body2" color="textSecondary">
                                                
                                                    <Link to={"coursesInfo/" + ele._id}>Show</Link>|
                                                    <Link to={"coursesEdit/" + ele._id}>Edit</Link>|
                                                    <Link to={"enrollStudents/" + ele._id}>Enroll Students</Link>|
                                                    <Link to={"unenrollStudents/" + ele._id}>UnEnroll Students</Link>


                                                </Typography>
                                            </CardContent>

                                        </Card>
                                    </Grid>
                                ))}

                            </Grid>
                        </Container>





                    }
                </div>
                :
                <div>
                    {/* {
    state.coursesForm.map(ele=>
    {
        return (
            <ul key={ele._id}>
            <Link to={"courses/"+ele._id}> Name-{ele.name}</Link>--{'>'}
            <Link to={"coursesInfo/"+ele._id}>Show</Link>
                <li>Description-{ele.description}</li>
                </ul>
        )
        
    })
} */}
                </div>
            }
        </div>
    )
}
export default AllCourses