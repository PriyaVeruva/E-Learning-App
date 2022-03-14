import React, {useState, useEffect } from "react";
import { startStudentDetails } from "../../actions/allStudentDetails";
import { startEnrollStudents} from "../../actions/courseList";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
const EnrollStudents = (props) => {
    const[search,setSearch]=useState('')
    const[unEnrolledStudent,setUnEnrolledStudent]=useState([])
    console.log(props.match.params)
    const { id } = props.match.params
    const dispatch = useDispatch()
    const state = useSelector((state) => {
        return state
    })
    useEffect(() => {
        dispatch(startStudentDetails())

    }, [])
    useEffect(()=>
    {
if(state.studentRegister.length>0&&state.coursesForm.length>0)
{
    const res=[]
    const courseInformation=state.coursesForm.find(ele=>ele._id===id)
    //console.log(courseInformation,'data')
    state.studentRegister.forEach(ele=>
        {
            const result=courseInformation.students.find(e=>e.student===ele._id)
            //console.log(result,'res')
            if(!result)
            {
                res.push(ele)
            }
           
        }
        )
        //console.log(res,'res')
        setUnEnrolledStudent(res)
}
    },[state.studentRegister])
    const handleClick = (sid) => {
        dispatch(startEnrollStudents(sid, id))
    }
    
    //here while dispatching i need to send both courseid and sudentid.so courseid we are getting from props and student id we are getting by loop the student info
    return (
            <div>
                  <Link to="/allcourses"><NavigateBeforeIcon sx={{ fontSize: 40 }} /></Link>
                  
                      <div className="container">
            <input type="text" placeholder="Search.." className="form-control" style={{marginTop:50,marginBottom:20,width:"40%"}}
            onChange={(e)=>
            {
                setSearch(e.target.value)
            }}/>
            <table className="table table-bordered">
                <thead className="thead-dark">
                    <tr>
                        <th>Name</th>
                        <th>Enroll</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        unEnrolledStudent.filter((ele)=>
                        {
                            if(search==="")
                            {
                                return ele
                            }
                            else if(
                            
                                ele.name.toLowerCase().includes(search.toLowerCase())

                            ){
                                return ele
                            }
                        }).map(ele => {
                            return (
                                <tr key={ele._id}>
                                    <td>{ele.name}</td>
                                    <td> <button onClick={() => handleClick(ele._id)}>Enroll</button></td>
                                   
                                </tr>

                            )
                        })

                    }
                </tbody>

            </table>
                </div>
                </div>

    )
}
export default EnrollStudents