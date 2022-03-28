import React, { useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { startGetAllLectures, startDeleteLecture } from "../../actions/addLectures";
import {Button} from "@mui/material"
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';

const AllLectures = (props) => {
    const { id } = props.match.params
    //console.log(id, 'get')
    const dispatch = useDispatch()
    const state = useSelector((state) => {
        return state
    })
    useEffect(() => {
        dispatch(startGetAllLectures(id))
    }, [])

    useEffect(() => {
        dispatch(startGetAllLectures(id))
    }, [])
    const handleRemove = (lid) => {
        dispatch(startDeleteLecture(lid, id))
    }
    return (
        <div>

            <h1>Total Lectures-{state.lectures.length}</h1>
            {
                state.lectures.map(ele => {
                    return (
                        <ul key={ele._id}>
                            {localStorage.getItem('role') === 'admin' ?
                                <li>{`Title-${ele.title}`} <Link to={`/courses/${id}/getlectures/${ele._id}`}>Lectures Details</Link> --{'>'}

                                    <Button  className="mr-2"  onClick={() => handleRemove(ele._id)}><PersonRemoveIcon/></Button>
                                </li>
                                :
                                <li>{`Title-${ele.title}`} --{'>'} <Link to={`/courses/${id}/getlectures/${ele._id}`}>Lectures Details</Link> </li>
                            }
                        </ul>
                    )
                })
            }
        </div>
    )
}
export default withRouter(AllLectures)