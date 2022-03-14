import React,{useEffect} from "react";
import { Link,withRouter } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { startGetAllLectures,startShowLectureInfo ,startDeleteLecture} from "../actions/addLectures";

const AllLectures=(props)=>
{
    const{id}=props.match.params
    console.log(id,'get')
    const dispatch=useDispatch()
    const state=useSelector((state)=>
    {
        return state
    })
    console.log(state,'state')
    useEffect(()=>
    {
dispatch(startGetAllLectures(id))
    },[])
  
    const handleClick = (lid) => {
        dispatch(startShowLectureInfo(lid, id))
        console.log(lid,'lid')
    }
    const handleRemove=(lid)=>
    {
        dispatch(startDeleteLecture(lid,id))
    }
    return (
        <div>
           
<h1>Total Lectures-{state.lectures.length}</h1>
{
    state.lectures.map(ele=>
    {
        return (
            <ul key={ele._id}>
                <li>{ele.title} <Link to="/getlectures/" onClick={()=>handleClick(ele._id)}>show</Link> --{'>'}
                <button onClick={()=>handleRemove(ele._id)}>Delete</button>
                </li>
                </ul>
        )
    })
}
        </div>
    )
}
export default withRouter(AllLectures)