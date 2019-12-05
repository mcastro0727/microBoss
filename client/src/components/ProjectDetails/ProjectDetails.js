import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table } from "react-bootstrap";


const ProjectDetails = ({ title, creator, startDate, deadLine, todos, assignee }) => {
    //console.log(detail)
    //console.log(key)
   
    
    

    return(
        <>
        <h1 style={{ fontWeight: 'bolder', fontStyle: 'italic', color: 'yellow' }}>Project Details</h1>
        <h5>Project Name:: {title}</h5>
        <p>Project Creator:: {creator}</p>
        <p>Initial Start Date:: {startDate}</p>
        <p>Deadline:: {deadLine}</p>
        <p>Project Notes:: {todos}</p>
        <p>Who's working on this?? {assignee}</p>
        </>
    )
}
export default ProjectDetails

