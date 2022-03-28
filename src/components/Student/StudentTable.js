import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom"
import { startStudentDetails, startDeleteStudent } from "../../actions/students";
import BootstrapTable from "react-bootstrap-table-next"
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.css'
import paginationFactory from "react-bootstrap-table2-paginator"
import { Container } from "reactstrap";
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import { Button } from "@mui/material";
import swal from 'sweetalert'
const StudentTable = (props) => {
    const [search, setSearch] = useState('')
    const dispatch = useDispatch()
    const state = useSelector((state) => {
        return state
    })
    const handleRemove = (_id) => {
        dispatch(startDeleteStudent(_id, swal))

    }
    useEffect(() => {
        dispatch(startStudentDetails(swal))

    }, [])
    const columns = [
        { dataField: 'name', text: 'Name', sort: true },
        { dataField: 'email', text: 'Email', sort: true },
        {
            dataField: "link",
            text: "Action",
            formatter: (rowContent, row) => {
                return (
                    <div>
                        <Link to={"edit/" + row._id}>
                            <Button className="mr-2" >
                                <ModeEditIcon />
                            </Button>
                        </Link>
                        <Button className="mr-2" onClick={() => handleRemove(row._id)}>
                            <PersonRemoveIcon />
                        </Button>
                    </div>
                );
            },
        },]

    return (
        <div className="container">
            <h1>Total Students-{state.student.length}</h1>
            <Container>
                <input type="text" placeholder="Search By Name/Email..." className="form-control" style={{ marginTop: 50, marginBottom: 20, width: "40%" }}
                    onChange={(e) => {
                        setSearch(e.target.value)
                    }} />
                <BootstrapTable bootstrap4 keyField='name'
                    columns={columns}
                    data={state.student.filter((ele) => {
                        if (search === "") {
                            return ele
                        }
                        else if (

                            ele.name.toLowerCase().includes(search.toLowerCase()) ||
                            ele.email.toLowerCase().includes(search.toLowerCase())
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
    )
}
export default StudentTable