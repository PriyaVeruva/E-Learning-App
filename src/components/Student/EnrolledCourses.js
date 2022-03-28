import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { startEnrolledCourses } from "../../actions/courses";
import { Link, withRouter } from "react-router-dom";
import { Card, CardContent, CardMedia, CardHeader, CardActionArea, IconButton, Container, Typography, } from '@mui/material'
import Grid from '@mui/material/Grid';
import { makeStyles } from '@mui/styles'
const useStyles = makeStyles(expand => ({
    root: {

        marginLeft: 'right',
        textAlign: 'center'
    }
}))
const EnrolledCourses = (props) => {
    const classes = useStyles()
    const [search, setSearch] = useState('')
    const dispatch = useDispatch()
    const state = useSelector((state) => {
        return state
    })
    useEffect(() => {
        dispatch(startEnrolledCourses())
    }, [])
    const handleCourse = (e, _id) => {
        e.preventDefault()
        props.history.push(`/play/${_id}`)
        //alert('hello')
    }
    return (
        <div>

            <div>
                <input type="text" placeholder="Search.." className="form-control" style={{ marginTop: 50, marginBottom: 20, width: "30%", float: "right" }}
                    onChange={(e) => {
                        setSearch(e.target.value)
                    }} />
                {

                    <Container>
                        <Grid container spacing={1}
                        >
                            {state.courses.filter((ele) => {
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
                                            title={<Link to={"courses/" + ele._id}>{`Course-${ele.name}`}</Link>
                                            }
                                            subheader={`Level-${ele.level}`}
                                        />
                                        <CardActionArea onClick={(e) => {
                                            handleCourse(e, ele._id)
                                        }}>
                                            <CardMedia
                                                component="img"
                                                height="194"
                                                image="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/154254251/original/759d7276276884fe19f3b59a9d9a2321dbbb3773/create-your-website-in-php-nodejs-python-react-laravel.jpeg"
                                                alt="Paella dish"
                                            />
                                        </CardActionArea>
                                        <CardContent>
                                            <Typography variant="body2" color="textSecondary">

                                                <Link to={"coursesInfo/" + ele._id}>More about Course Details</Link>
                                            </Typography>
                                        </CardContent>

                                    </Card>
                                </Grid>
                            ))}

                        </Grid>
                    </Container>
                }
            </div>
        </div>
    )
}
export default withRouter(EnrolledCourses)