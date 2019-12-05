import React from 'react'

const ProjectDetails = ({ props }) => {
    console.log(props)
   
    
    

    return(
        <>
        <h5>Project Name:: {props.projectTitle}</h5>
        <p>Project Creator:: {props.creator}</p>
        <p>Initial Start Date:: {props.startDate}</p>
        <p>Deadline:: {props.deadLine}.</p>
        <p>Project Notes:: {props.todos}.</p>
        <p>Who's working on this?? ....{props.assignee}.</p>
        </>
    )
}
export default ProjectDetails