import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { startDeleteStudent } from "../../actions/allStudentDetails";
import { Link } from "react-router-dom"
import { startStudentDetails } from "../../actions/allStudentDetails";
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
    const[search,setSearch]=useState('')
    const dispatch = useDispatch()
   
    //getting a individual student information
    const state = useSelector((state) => {
        return state
    })
    //deleating a student
    const handleRemove = (_id) => {
        dispatch(startDeleteStudent(_id,swal))

    }
    //getting all studentdetails 
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
                                <ModeEditIcon/> 
                            </Button>
                        </Link>

                        <Button  className="mr-2" onClick={() => handleRemove(row._id)}>
                            <PersonRemoveIcon/>
                        </Button>
                    </div>
                );
            },
        },]
    //displaying student data in table
    return (
        <div className="container">
            <h1>Total Students-{state.studentRegister.length}</h1>
            <Container>
            <input type="text" placeholder="Search By Name/Email..." className="form-control" style={{marginTop:50,marginBottom:20,width:"40%"}}
            onChange={(e)=>
            {
                setSearch(e.target.value)
            }}/>
                <BootstrapTable bootstrap4 keyField='name'
                    columns={columns}
                    data={state.studentRegister.filter((ele)=>
                        {
                            if(search==="")
                            {
                                return ele
                            }
                            else if(
                            
                                ele.name.toLowerCase().includes(search.toLowerCase())||
                                ele.email.toLowerCase().includes(search.toLowerCase())
                            ){
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
           

            {/* {<table>
                <thead>
                    <tr>

                        <th>Name</th>
                        <th>Email</th>
                        <th>Show</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        studentRegister && studentRegister.length > 0 ?
                            studentRegister.map(ele => {
                                return (

                                    <tr key={ele._id}>

                                        <td>{ele.name}</td>
                                        <td>{ele.email}</td>
                                        <td>
                                            <Link to={`/edit/${ele._id}`}>
                                                <span className="edit">Edit</span>
                                            </Link>
                                        </td>
                                        <td><button onClick={() => handleRemove(ele._id)}>delete</button></td>
                                    </tr>

                                )
                            })
                            :
                            "Loading"
                    }

                </tbody>

            </table>} */}
        </div>
    )
}
export default StudentTable