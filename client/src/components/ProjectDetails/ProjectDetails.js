import React from 'react'

const ProjectDetails = ({ props }) => {
    console.log(props)
    
    

    return(
        <>
        <h5>{props.projectTitle}</h5>
        <p>{props.creator}</p>
        <p>{props.startDate}</p>
        <p>{props.deadLine}.</p>
        <p>{props.todos}.</p>
        <p>{props.assignee}.</p>
        </>
    )
}
export default ProjectDetails