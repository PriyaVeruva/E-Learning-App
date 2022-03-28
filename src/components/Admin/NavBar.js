import React from "react";
import { Link, Route, withRouter, useHistory } from 'react-router-dom'
import Register from "../Admin/Register"
import Login from "../Admin/Login"
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
const useStyles = makeStyles({
    text: {
        "marginTop": "70px",
        "textAlign": "center"
    }
})
const NavBar = (props) => {
    const classes = useStyles()
    const toggle = false
    const { userLoggedIn, handleAuth } = props
    return (
        <div className={classes.root}>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <LocalLibraryIcon />
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Welcome To e-Learning
                        </Typography>
                        {!userLoggedIn &&
                            <>
                                {toggle && <Link sx={{ marginLeft: "auto" }} color="inherit" to="/register">Register</Link>}
                                <Link sx={{ marginLeft: "auto" }} color="inherit" to="/login" style={{ color: 'white' }}>Login</Link>
                            </>}
                    </Toolbar>
                </AppBar>
                <Route path="/register" component={Register} exact={true}/>
                <Route path="/login" render={((props) => {
                    return <Login {...props} handleAuth={handleAuth} />
                })} />
            </Box>
        </div>
    )
}
export default withRouter(NavBar)