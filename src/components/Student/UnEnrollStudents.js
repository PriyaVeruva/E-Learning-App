import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom"
import { startStudentDetails } from "../../actions/students";
import { startUnEnrollStudents } from "../../actions/courses";
import BootstrapTable from "react-bootstrap-table-next"
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.css'
import paginationFactory from "react-bootstrap-table2-paginator"
import { Container } from "reactstrap";
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import { Button } from "@mui/material";
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import swal from 'sweetalert'
const UnEnrollStudents = (props) => {
    const [search, setSearch] = useState('')
    const [enrolledStudent, setEnrolledStudent] = useState([])
    const { id } = props.match.params
    const dispatch = useDispatch()
    const state = useSelector((state) => {
        return state
    })
    useEffect(() => {
        dispatch(startStudentDetails())

    }, [])
    useEffect(() => {
        if (state.student.length > 0) {
            const allUnEnrollStudents = state.student.filter(ele => ele.courses.some(e => e.course === id))
            setEnrolledStudent(allUnEnrollStudents)
        }
    }, [state.student, state.allCourses]);
    const handleClick = (sid) => {
        dispatch(startUnEnrollStudents(sid, id, props.history.push, swal))
    }
    const columns = [
        { dataField: 'name', text: 'Name', sort: true },
        {
            dataField: "link",
            text: "Action",
            formatter: (rowContent, row) => {
                return (
                    <div>
                        <Button className="mr-2" onClick={() => handleClick(row._id)}>
                            <PersonRemoveIcon />
                        </Button>
                    </div>
                );
            },
        },]

    return (
        <div>
            <Link to="/allcourses"><NavigateBeforeIcon sx={{ fontSize: 40 }} /></Link>
            <div className="container">
                <h3 style={{ color: "Background" }}>Total Students Need to be UnEnrolled-{enrolledStudent.length}</h3>
                <Container>
                    <input type="text" placeholder="Search By Name..." className="form-control" style={{ marginTop: 50, marginBottom: 20, width: "40%" }}
                        onChange={(e) => {
                            setSearch(e.target.value)
                        }} />
                    <BootstrapTable bootstrap4 keyField='name'
                        columns={columns}
                        data={enrolledStudent.filter((ele) => {
                            if (search === "") {
                                return ele
                            }
                            else if (

                                ele.name.toLowerCase().includes(search.toLowerCase())

                            ) {
                                return ele
                            }
                        })}
                        pagination={paginationFactory({
                            page: 1, sizePerPage: 5,
                            lastPageText: '>>',
                            firstPageText: '<<',
                            nextPageText: '>',
                            prePageText: '<',
                            showTotal: true,
                            alwaysShowAllBtns: true,
                            onPageChange: function (page, sizePerPage) {
                                console.log('page', page)
                                console.log('sizePerpage', sizePerPage)
                            },
                            onSizePerPageChange: function (page, sizePerPage) {

                                console.log('page', page)
                                console.log('sizePerPage', sizePerPage)
                            }
                        })}
                        striped hover condensed />
                </Container>
            </div>
        </div>
    )
}
export default UnEnrollStudents
