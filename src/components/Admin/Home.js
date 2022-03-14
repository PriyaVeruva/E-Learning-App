import React from "react"
import { Link, Route } from 'react-router-dom'
import Login from "../Admin/Login"
const Home = (props) => {

    return (
        <div>
            <h1>Home</h1>
            <Link to="/login">Login</Link>
            <Route path="/login" component={Login} />

        </div>
    )
}
export default Home