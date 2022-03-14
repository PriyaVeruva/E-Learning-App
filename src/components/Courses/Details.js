import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import { useSelector } from "react-redux";
import CourseList from "./CourseList";

const Details=(props)=>
{const state = useSelector((state) => {
    return state
})
    return (
        <div>
         <Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>HTML</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">Basics of HTML</Card.Subtitle>
    <Card.Link href={"courseslist/"+state._id}>Html</Card.Link>
    <Card.Link href="#">Another Link</Card.Link>
  </Card.Body>
</Card>
<CourseList/>
        </div>
    )
}
export default Details